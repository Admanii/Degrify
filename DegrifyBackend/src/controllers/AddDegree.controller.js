import bcrypt from "bcrypt";
import Degree from "../models/Degree.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";

export const AddDegree = async (req, res) => {
  try {
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

    const result = await Degree.create({
      studentID: req.query.student_id,
      organisationID: req.query.organisation_id,
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
