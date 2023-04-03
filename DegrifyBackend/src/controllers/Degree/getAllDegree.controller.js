import bcrypt from "bcrypt";
import Degree from "../../models/Degree.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";

export const getAllDegrees = async (req, res) => {
  try {
    const list = await Degree.find({ active: true }).select([
      "studentID",
      "organisationVerified",
      "HECVerified",
      "completeVerified",
    ]);
    return res.json(jsonGenerate(statusCode.SUCCESS, "All Degrees", list));
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
