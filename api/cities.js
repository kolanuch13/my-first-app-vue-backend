const express = require("express");
const ctrlCities = require("../controllers/cities");
const router = express.Router();

router.get("/", ctrlCities.get);

module.exports = router;
