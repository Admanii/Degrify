import bcrypt from "bcrypt";
import Degree from "../models/Degree.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";
import Student from "../models/Student.js";

export const getAllDegrees = async (req, res) => {
  try {
    const list = await Degree.find({ active: true }).select([
      "-_id",
      "studentID",
    ]);
    const result = [];

    const array = Object.values(list);

    for (let i = 0; i < array.length; i++) {
      const student = array[i].studentID;
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

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      const degree = degree1[0];

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

export const getStudentVerifiedDegrees = async (req, res) => {
  try {
    const list = await Degree.find({ studentVerified: true }).select([
      "-_id",
      "studentID",
    ]);

    if (!list) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "No Degree Found", list)
      );
    }
    const result = [];

    const array = Object.values(list);
    for (let i = 0; i < array.length; i++) {
      const student = array[i].studentID;
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
        "_id",
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

    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "displaying Student Verified Degree",
        result
      )
    );
  } catch (err) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying Student Verified Degree",
        err
      )
    );
  }
};

export const getOrganisationVerifiedDegrees = async (req, res) => {
  try {
    const list = await Degree.find({ organisationVerified: true }).select([
      "-_id",
      "studentID",
    ]);

    if (!list) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "No Degree Found", list)
      );
    }
    const result = [];

    const array = Object.values(list);
    for (let i = 0; i < array.length; i++) {
      const student = array[i].studentID;
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
        "_id",
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

    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "displaying Student Verified Degree",
        result
      )
    );
  } catch (err) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying Organisation Verified Degree",
        err
      )
    );
  }
};

export const getHECVerifiedDegrees = async (req, res) => {
  try {
    const list = await Degree.find({ HECVerified: true }).select([
      "-_id",
      "studentID",
    ]);

    if (!list) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "No Degree Found", list)
      );
    }
    const result = [];

    const array = Object.values(list);
    for (let i = 0; i < array.length; i++) {
      const student = array[i].studentID;
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

      const degree = {};
      degree = await Degree.find({ studentID: student }).select([
        "_id",
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

    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "displaying Student Verified Degree",
        result
      )
    );
  } catch (err) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying HEC Verified Degree",
        err
      )
    );
  }
};

export const getCompleteVerifiedDegrees = async (req, res) => {
  try {
    const list = await Degree.find({ completeVerified: true }).select([
      "-_id",
      "studentID",
    ]);

    if (!list) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "No Degree Found", list)
      );
    }
    const result = [];

    const array = Object.values(list);
    for (let i = 0; i < array.length; i++) {
      const student = array[i].studentID;
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
        "_id",
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

    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "displaying Student Verified Degree",
        result
      )
    );
  } catch (err) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying Complete Verified Degree",
        err
      )
    );
  }
};

export const getUniversityDegree = async (req, res) => {
  try {
    const list = await Degree.find({
      $and: [
        {
          organisationID: req.query.organisation_id,
        },
        {
          active: true,
        },
      ],
    }).select(["-_id", "studentID"]);
    const result = [];

    const array = Object.values(list);

    for (let i = 0; i < array.length; i++) {
      const student = array[i].studentID;
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
        "_id",
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

export const getUniversityVerifiedDegree = async (req, res) => {
  //
};

export const getAllDegreeHEC = async (req, res) => {
  // student verified
  // university verified
};
