import bcrypt from "bcrypt";
import Student from "../../models/Student.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";

export const getStudent = async (req, res) => {
  const username = req.body.userId;

  try {
    const list = await Student.findById(req.query.student_id)
      .select("")
      .populate([
        "name",
        "enrollmentNumber",
        "fatherName",
        "studentID",
        "DateOfBirth",
        "CNIC",
        "DateOfAdmission",
        "DateOfompletion",
      ])
      .exec();

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Profile of the Student", list)
    );
  } catch (error) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying profile",
        error
      )
    );
  }
};
