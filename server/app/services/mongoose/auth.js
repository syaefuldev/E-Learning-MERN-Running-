const User = require("../../api/users/model");
const { BadRequestError, UnauthorizedError } = require("../../errors");
const { createTokenUser, createJWT } = require("../../utils");

const signin = async (req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Mohon isikan email dan password anda");
  }

  const result = await User.findOne({
    email: email,
  });

  if (!result) {
    throw new UnauthorizedError("Invalid Credentials");
  }

  const isPasswordCorrect = await result.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthorizedError("Invalid Credentials");
  }

  const token = createJWT({
    payload: createTokenUser(result),
  });

  return { token, role: result.role };
};
module.exports = { signin };
