const express = require("express");
const router = express()
const { create, index } = require("./controller");
const upload = require("../../middlewares/multer");

router.get("/users", index);
router.post("/users", upload.single("avatar"), create);

module.exports = router;
