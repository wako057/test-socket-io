"use strict"

const bunyan = require("bunyan");
const fs = require("fs");
const config = require("./config");
const envLogLevel = process.env.ENV_LOG_LEVEL || "warn";
const env = process.env.NODE_ENV || "production";




class Logger {

    modifiedStream (config) {
        const writableStream = fs.createWriteStream(
            `${config.path}/${config.name}.log`,
            { flags: "a", encoding: "utf8" }
        );
        return {
            write: incomingLogLine => {
                const outgoingLogLine = Object.assign(
                    JSON.parse(incomingLogLine),
                    { "@timestamp": new Date().toISOString() }
                );
                writableStream.write(`${JSON.stringify(outgoingLogLine, bunyan.safeCycles())}\n`);
            }
        };
    }
    
    constructor() {
        this.streams = [];
        this.loggers = {};  

        if (env === "development") {
            this.streams.push({
                level: envLogLevel,
                stream: process.stdout
            });
        }    
        
        if (config.logs.default.enable) {
            this.streams.push({
                level: config.logs.default.level,
                stream: this.modifiedStream(config.logs.default)
            });
        }

        this.loggers[ "default" ] = bunyan.createLogger(
            {
                name: config.logs.default.name,
                src: env !== "production",
                streams: this.streams
            }
        );
    }

    getDefaultLogger() {
        return this.loggers.default;
    }
}

module.exports = new Logger();
