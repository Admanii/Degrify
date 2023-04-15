import bcrypt from "bcrypt";
import Degree from "../models/Degree.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";

export const HECAppovedDegree = async (req, res) => {
  try {
    const deleted = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        HECVerified: true,
        dateCreated: Date.now,
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

export const StudentAppovedDegree = async (req, res) => {
  try {
    const updated = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        studentVerified: true,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Updated by Student", updated)
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

export const CompleteAppovedDegree = async (req, res) => {
  try {
    const updated = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        completeVerified: true,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Updated Completed", updated)
    );
  } catch (error) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying",
        error
      )
    );
  }
};
