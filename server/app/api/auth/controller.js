const { signin } = require("../../services/mongoose/auth");
const { StatusCodes } = require("http-status-codes");

const signinUsers = async (req, res, next) => {
  try {
    const result = await signin(req);

    res.status(StatusCodes.CREATED).json({
      data: { token: result.token },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { signinUsers };
