"use strict";

const router = require("express").Router();
const main = require("../controller/main");
const path = require("path");

router.get("/", (req, res, next) => {
    main.indexAction();

    // res.send("<h1>Node Skeleton</h1><h2>If see it, your nodeJs is working</h2>");

    res.sendFile(path.resolve(`${__dirname}/../views/index.html`));
});

router.post("/", (req, res, next) => {

});

module.exports = router;
