"use strict";

const rootRoute = require("./root");

const router = require("express").Router();

router.use("/", rootRoute);

module.exports = router;
