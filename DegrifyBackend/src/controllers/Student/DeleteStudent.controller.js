import bcrypt from "bcrypt";
import Student from "../../models/Student.js";
import User from "../../models/User.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";

export const deleteStudent = async (req, res) => {
  const newUser = {
    name: req.body.name,
    enrollmentNumber: req.body.enrollmentNumber,
    fatherName: req.body.fatherName,
    studentID: req.body.studentID,
    DateOfBirth: req.body.DateOfBirth,
    CNIC: req.body.CNIC,
    DateOfAdmission: req.body.DateOfAdmission,
    DateOfompletion: req.body.DateOfompletion,
  };

  const isAdmin = await User.findById(req.userId).select("userRole");

  if (isAdmin.userRole !== "ADMIN") {
    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "You are not authorised to delete profile"
      )
    );
  }
  try {
    const deleted = await Student.findByIdAndUpdate(
      req.query.student_id,
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
        "Profile of the Student Deleted",
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
