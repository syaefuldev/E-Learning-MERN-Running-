const mongoose = require("mongoose");

let courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title harus diisi"],
      unique: true,
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Price harus diisi"],
    },
    images: {
      type: String,
    },
    users: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
