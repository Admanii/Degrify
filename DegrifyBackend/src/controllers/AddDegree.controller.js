import bcrypt from "bcrypt";
import Degree from "../models/Degree.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";

export const AddDegree = async (req, res) => {
  const degreeExist = await Degree.findOne({
    $or: [
      {
        studentID: req.query.student_id,
      },
    ],
  });

  if (degreeExist) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Degree already Exists")
    );
  }

  try {
    const result = await Degree.create({
      studentID: req.query.student_id,
    });

    res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Registration successfull", {
        degreeId: result._id,
      })
    );
  } catch (err) {
    res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Degree Registration Failed",
        {
          error: err,
        }
      )
    );
  }
};