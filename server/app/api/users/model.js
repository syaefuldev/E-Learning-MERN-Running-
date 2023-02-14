const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

let usersSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: [true, "Nama tidak boleh kosong"],
      minLength: 3,
      maxLength: 50,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email tidak boleh kosong"],
      minLength: 6,
    },
    username: {
      type: String,
      unique: true,
      required: [true, "Username tidak boleh kosong"],
      minLength: 6,
    },
    password: {
      type: String,
      required: [true, "Password harus di isi"],
      minLength: 6,
    },
    avatar: {
      type: String,
    },
    bio: {
      type: String,
    },
    role: {
      type: String,
      enum: ["client", "admin"],
      default: "client",
    },
  },
  {
    timestamps: true,
  }
);

usersSchema.pre("save", async function (next) {
  const User = this;
  if (User.isModified("password")) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next();
});

usersSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", usersSchema);
