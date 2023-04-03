import bcrypt from "bcrypt";
import Student from "../../models/Student.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";

export const AddStudent = async (req, res) => {
  const {
    name,
    enrollmentNumber,
    fatherName,
    studentID,
    DateOfBirth,
    CNIC,
    DateOfAdmission,
    DateOfompletion,
  } = req.body;

  const studentExist = await Student.findOne({
    $or: [
      {
        studentID: studentID,
      },
    ],
  });
  if (studentExist) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Student already Exists")
    );
  }
  try {
    const result = await Student.create({
      name: name,
      enrollmentNumber: enrollmentNumber,
      fatherName: fatherName,
      studentID: studentID,
      DateOfBirth: DateOfBirth,
      CNIC: CNIC,
      DateOfAdmission: DateOfAdmission,
      DateOfompletion: DateOfompletion,
    });

    res.json(
      jsonGenerate(statusCode.SUCCESS, "Student Registered", {
        studentMongoID: result._id,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
