const express = require("express");
const router = express.Router();
const ctrlUsers = require("../controllers/users");
const check = require("../middlewares/checkAuthLogin");

router.post("/register", ctrlUsers.register);

router.post("/login", ctrlUsers.login);

router.post("/logout", check.auth, ctrlUsers.logout);

router.get("/current", check.auth, ctrlUsers.current);

module.exports = router;
