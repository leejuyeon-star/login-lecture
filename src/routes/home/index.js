"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello); // "/" 경로 코드
router.get("/login", ctrl.login); // "/login" 경로 코드

module.exports = router;