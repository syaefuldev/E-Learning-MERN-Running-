const express = require("express");
const router = express();
const { create, index } = require("./controller");
const { authenticateUser } = require("../../middlewares/auth");

router.post("/courses", authenticateUser, create);
router.get("/courses", index);

module.exports = router;
