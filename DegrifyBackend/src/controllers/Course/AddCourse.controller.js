import Course from "../../models/Course.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";

export const AddCourse = async (req, res) => {
  const courseExist = await Course.findOne({
    $or: [
      {
        courseID: req.query.course_id,
      },
    ],
  });

  if (courseExist) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Course already Exists")
    );
  }

  try {
    const result = await Course.create({
      courseID: req.query.course_id,
    });

    res.json(
      jsonGenerate(statusCode.SUCCESS, "Course Registration successfull", {
        courseID: result._id,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
