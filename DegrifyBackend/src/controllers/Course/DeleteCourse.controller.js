import Course from "../../models/Course.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";

export const deleteCourse = async (req, res) => {
  const newCourse = {
    courseID:req.body.courseID,
    courseNum: req.body.courseNum,
    courseDesc: req.body.courseDesc,
    degreeProg: req.body.degreeProg,
    creditHours: req.body.creditHours,
    HECVerified: req.body.HECVerified,
    LinkToDegree: req.body.LinkToDegree,
  }

  const isLinked = await Course.findById(req.userId).select("LinkToDegree");

  if (isLinked.LinkToDegree !== true) {
    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "You are not authorised to delete courses which are already linked to a degree or transcript"
      )
    );
  }
  try {
    const deleted = await Course.findByIdAndUpdate(
      req.query.course_id,
      {
        active: false,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "the Course Deleted",
        deleted
      )
    );
  } catch (error) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying ",
        error
      )
    );
  }
};
