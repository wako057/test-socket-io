"use strict";

const env = process.env.NODE_ENV || "production";
const port = process.env.NODE_PORT || 4242;

const logger = require("./logger").getDefaultLogger();
const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

const routes = require("./routes/index");

app.set("env", env);

app.use("/", routes);

const server = app.listen(port, () => {
    logger.info(`
    Process ${process.pid} is listening to all incoming requests on port ${port},
    workerProcess: ${process.pid}
`);
});

module.exports = server;
