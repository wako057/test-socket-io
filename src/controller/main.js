"use strict";
const logger = require("../logger").getDefaultLogger();

class Main {
    constructor () {}

    indexAction () {
        // ici on peut faire des choses et tests
        logger.info("indexAction");
    }
}

module.exports = new Main();
