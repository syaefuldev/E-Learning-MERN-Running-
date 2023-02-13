const {
  createCourse,
  getAllCourse,
  getOneCourse,
} = require("../../services/mongoose/courses");

const { StatusCodes } = require("http-status-codes");

const create = async (req, res, next) => {
  try {
    const result = await createCourse(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllCourse();

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, index };
