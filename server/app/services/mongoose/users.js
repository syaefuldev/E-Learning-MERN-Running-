const User = require("../../api/users/model");
const { BadRequestError, NotFoundError } = require("../../errors");
const { createTokenUser, createJWT } = require("../../utils");

const createUser = async (req) => {
  const { nama, email, password, role, username, bio } = req.body;

  const users = await User.create({
    nama,
    email,
    password,
    role,
    username,
    bio,
    avatar: req.file ? `uploads/${req.file.filename}` : `uploads/default.png`,
  });

  delete users._doc.password;
  return users;
};

const getAllUsers = async () => {
  const result = await User.find().select(
    "_id nama bio email username role avatar"
  );

  return result;
};

const getOneUser = async (req) => {
  const { id } = req.params;
  const result = await User.findOne({ _id: id }).select(
    "_id nama bio email username role avatar"
  );

  if (!result) throw new NotFoundError(`Tidak ada user dengan id : ${id}`);

  return result;
};

const updateUsers = async (req) => {
  const { id } = req.params;
  const { nama, email, password, username, bio } = req.body;

  const checkUser = await User.findOne({ _id: id });

  if (!checkUser) throw new NotFoundError(`Tidak ada user dengan id : ${id}`);

  const result = await User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      nama,
      email,
      password,
      username,
      bio,
      avatar: req.file ? `uploads/${req.file.filename}` : `uploads/default.png`,
    },
    {
      new: true,
      runValidators: true,
    }
  ).select("_id nama bio email username role avatar");

  const token = createJWT({
    payload: createTokenUser(result),
  });

  return { token };
};

const deleteUsers = async (req) => {
  const { id } = req.params;
  const result = await User.findOne({ _id: id });
  if (!result) throw new NotFoundError();

  await result.remove();

  return result;
};

module.exports = {
  createUser,
  getAllUsers,
  updateUsers,
  getOneUser,
  deleteUsers,
};
