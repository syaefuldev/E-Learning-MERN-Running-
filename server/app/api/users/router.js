const express = require("express");
const router = express();
const { create, index, updateUser, getOne, destroy } = require("./controller");
const upload = require("../../middlewares/multer");

router.get("/users", index);
router.get("/users/:id", getOne);
router.post("/users", upload.single("avatar"), create);
router.put("/users/:id", upload.single("avatar"), updateUser);
router.delete("/users/:id", destroy);

module.exports = router;
