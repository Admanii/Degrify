import bcrypt from "bcrypt";
import Degree from "../models/Degree.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";

export const HECAppovedDegree = async (req, res) => {
  try {
    const updatedDegree = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        HECVerified: true,
        completeVerified: true,
        //dateCreated: Date.now,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    if (!updatedDegree) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Degree Not Found", null)
      );
    }

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Updated by HEC", updatedDegree)
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
    const updatedDegree = await Degree.findByIdAndUpdate(
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
    if (!updatedDegree) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Degree Not Found", null)
      );
    }

    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "Degree Updated by University",
        updatedDegree
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
    const updatedDegree = await Degree.findByIdAndUpdate(
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
    if (!updatedDegree) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Degree Not Found", null)
      );
    }

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Updated by Student", updatedDegree)
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
    const updatedDegree = await Degree.findByIdAndUpdate(
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
    if (!updatedDegree) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Degree Not Found", null)
      );
    }

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Updated Completely", updatedDegree)
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
