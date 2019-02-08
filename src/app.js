"use strict";

const env = process.env.NODE_ENV || "production";
const port = process.env.NODE_PORT || 4242;

const logger = require("./logger").getDefaultLogger();
// const express = require("express");
// const app = express();
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// const bodyParser = require("body-parser");

const routes = require("./routes/index");

app.set("env", env);

app.use("/", routes);

// const server = app.listen(port, () => {
server.listen(port, () => {
    let today = new Date();

    logger.info(`
    Process ${process.pid} is listening to all incoming requests on port ${port},
    workerProcess: ${process.pid} Date: ${today.toLocaleString("FR-fr")}
`);
});

module.exports = server;
