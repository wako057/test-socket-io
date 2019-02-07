"use strict";

const router = require("express").Router();
const main = require("../controller/main");

router.get("/", (req, res, next) => {
    main.indexAction();
    res.send("<h1>Node Skeleton</h1><h2>If see it, your nodeJs is working</h2>");
});

router.post("/", (req, res, next) => {

});

module.exports = router;
