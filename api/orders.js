const express = require("express");
const ctrlOrders = require("../controllers/orders");
const check = require("../middlewares/checkAuthLogin");
const router = express.Router();

router.get("/", check.auth, ctrlOrders.get);

router.post("/", check.auth, ctrlOrders.create);

router.delete("/:orderId", check.auth, ctrlOrders.remove);

module.exports = router;
