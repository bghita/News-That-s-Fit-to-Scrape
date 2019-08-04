const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.js");

router.use("/", controller);

module.exports = router;