const Course = require("../../api/courses/model");

const createCourse = async (req) => {
  const { title, desc, price, users } = req.body;

  const course = await Course.create({
    title,
    desc,
    users,
    price,
    images: req.file
      ? `uploads/${req.file.filename}`
      : `uploads/avatar/default.png`,
  });
  return course;
};

const getAllCourse = async () => {
  const result = await Course.find().populate({
    path: "users",
    select: "_id nama",
  });
  return result;
};

const getOneCourse = async (req) => {
  const { id } = req.params;
  const result = await Course.findOne(id);

  return result;
};

module.exports = {
  getAllCourse,
  getOneCourse,
  createCourse,
};
