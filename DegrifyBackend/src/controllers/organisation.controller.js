import Organistation from "../models/Organistation.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";

export const getOrganisationByID = async (req, res) => {
  try {
    const organistionDetails = await Organistation.findById(
      req.query.organisation_id
    )
      .select("")
      .populate(["name", "phoneNumber", "address", "userRole"])
      .exec();
    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "Profile of the Organisation",
        organistionDetails
      )
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "failed", err)
    );
  }
};

export const getUniversities = async (req, res) => {
  try {
    const organistionDetails = await Organistation.find({
      userRole: "UNIVERSITY",
    })
      .select("")
      .populate(["name", "phoneNumber", "address", "userRole"])
      .exec();
    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "Profile of the Organisations",
        organistionDetails
      )
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "failed", err)
    );
  }
};
