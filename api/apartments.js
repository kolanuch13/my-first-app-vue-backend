const express = require("express");
const ctrlApartments = require("../controllers/appartments");
const check = require("../middlewares/checkAuthLogin");
const router = express.Router();

router.get("/", ctrlApartments.get);

router.get("/:apartmentId", ctrlApartments.getById);

router.post("/:apartmentId/reviews", check.auth, ctrlApartments.createReview);

module.exports = router;
