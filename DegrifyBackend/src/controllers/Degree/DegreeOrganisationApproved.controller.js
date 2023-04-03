import bcrypt from "bcrypt";
import Degree from "../../models/Degree.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";

export const OrganisationAppovedDegree = async (req, res) => {
  try {
    const updated = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        organisationVerified: true,
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
        "Degree Updated by Organisation",
        updated
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
