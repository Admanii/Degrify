import bcrypt from "bcrypt";
import Degree from "../../models/Degree.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";

export const HECAppovedDegree = async (req, res) => {
  try {
    const deleted = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        HECVerified: true,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Updated", deleted)
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
