import bcrypt from "bcrypt";
import Degree from "../../models/Degree.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";
import Student from "../../models/Student.js";

export const getAllDegrees = async (req, res) => {
  try {
    const list = await Degree.find({ active: true }).select([
      "-_id",
      "studentID",
    ]);
    const result = [];

    const array = Object.values(list);

    for (let i = 0; i < array.length; i++) {
      const student = array[0].studentID;
      const studentDetail = await Student.findById(student)
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

      const degree = await Degree.find({ studentID: student }).select([
        "-_id",
        "studentID",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      // console.log(student);

      const particular = {
        studentDetail,
        degree,
      };
      // console.log(particular);
      result.push(particular);
    }

    return res.json(jsonGenerate(statusCode.SUCCESS, "All Degrees", result));
  } catch (error) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying Degree",
        error
      )
    );
  }
};
