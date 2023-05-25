import Organistation from "../models/Organistation.js";
import User from "../models/User.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";

export const getOrganisationByID = async (req, res) => {
  try {
    const organistionDetails = await Organistation.findById(
      req.query.organisation_id
    ).select([
      "name",
      "phoneNumber",
      "address",
      "userRole",
      "active",
      "dateCreated",
    ]);

    var user = await User.findOne({
      organisationID: organistionDetails._id,
    })
      .select("email")
      .exec();

    //console.log(user)
    let email = user?.email ?? "";
    // console.log(email + " emaillllll")

    var orgDetails = {
      ...organistionDetails._doc,
      email,
    };

    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "Profile of the Organisation",
        orgDetails
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
      .exec();

    if (organistionDetails.length === 0) {
      return res.json(
        jsonGenerate(
          statusCode.SUCCESS,
          "No Universities Found",
          organistionDetails
        )
      );
    }

    const result = [];
    const array = Object.values(organistionDetails);

    for (let i = 0; i < array.length; i++) {
      const orgId = array[i]._id;
      var user = await User.findOne({
        organisationID: orgId,
      })
        .select("email")
        .exec();

      const orgDetail = await Organistation.findById(orgId).select([
        "name",
        "phoneNumber",
        "address",
        "userRole",
        "active",
        "dateCreated",
      ]);
      let email = user?.email ?? "";
      const particular = {
        ...orgDetail._doc,
        email,
      };
      result.push(particular);
    }
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Profile of the Universities", result)
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "failed", err)
    );
  }
};

export const getUniversitiesCount = async (req, res) => {
  try {
    const organistionDetails = await Organistation.find({
      userRole: "UNIVERSITY",
    })
      .select("")
      .exec();

    if (organistionDetails.length === 0) {
      return res.json(
        jsonGenerate(
          statusCode.SUCCESS,
          "No Universities Found",
          organistionDetails
        )
      );
    }
    var count = { count: organistionDetails.length };
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Universities count", count)
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "failed", err)
    );
  }
};
