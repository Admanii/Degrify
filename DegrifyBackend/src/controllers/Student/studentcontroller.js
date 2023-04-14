import bcrypt from "bcrypt";
import Student from "../../models/Student.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";
import User from "../../models/User.js";

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
      {
        CNIC: CNIC,
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

export const getAllStudent = async (req, res) => {
  try {
    const allStudents = await Student.find({ active: true }).select([
      "name",
      "enrollmentNumber",
      "fatherName",
      "studentID",
      "DateOfBirth",
      "CNIC",
      "DateOfAdmission",
      "DateOfompletion",
    ]);
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "All Students", allStudents)
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Some Error is found", err)
    );
  }
};
