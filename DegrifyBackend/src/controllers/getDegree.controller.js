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
          "Program",
          "GraduatingYear",
        ])
        .exec();

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "studentVerified",
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

export const getDegreeByID = async (req, res) => {
  try {
    const list = await Degree.findById(req.query.degree_id).select([
      "_id",
      "studentID",
      "studentVerified",
      "organisationVerified",
      "HECVerified",
      "completeVerified",
      "dateCreated",
    ]);

    if (!list) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "No Degree Found", list)
      );
    }
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Information", list)
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed", err)
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
          "Program",
          "GraduatingYear",
        ])
        .exec();

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      const degree = degree1[0];
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
    const list = await Degree.find({
      organisationVerified: true,
    }).select(["-_id", "studentID"]);

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
          "Program",
          "GraduatingYear",
        ])
        .exec();

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      const degree = degree1[0];
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
    const list = await Degree.find({
      studentVerified: true,
      organisationVerified: true,
      HECVerified: true,
      active: true,
    }).select(["-_id", "studentID"]);

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
          "Program",
          "GraduatingYear",
        ])
        .exec();

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      const degree = degree1[0];
      // console.log(student);

      const particular = {
        studentDetail,
        degree,
      };
      // console.log(particular);
      result.push(particular);
    }

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "HEC Verified Degrees", result)
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
          "Program",
          "GraduatingYear",
        ])
        .exec();

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      const degree = degree1[0];
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

export const getUniversityAllDegree = async (req, res) => {
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
          "Program",
          "GraduatingYear",
        ])
        .exec();

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      const degree = degree1[0];
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

export const getVerifiedUniversityDegree = async (req, res) => {
  try {
    const list = await Degree.find({
      $and: [
        {
          organisationID: req.query.organisation_id,
          studentVerified: true,
          organisationVerified: true,
          HECVerified: true,
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
          "Program",
          "GraduatingYear",
        ])
        .exec();

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      const degree = degree1[0];
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

export const getUnverifiedUniversityDegree = async (req, res) => {
  try {
    const list = await Degree.find({
      $and: [
        {
          organisationID: req.query.organisation_id,
          organisationVerified: false,
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
          "Program",
          "GraduatingYear",
        ])
        .exec();

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      const degree = degree1[0];
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

export const getHECAllDegree = async (req, res) => {
  try {
    const list = await Degree.find({
      $and: [
        {
          studentVerified: true,
          organisationVerified: true,
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
          "Program",
          "GraduatingYear",
        ])
        .exec();

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      const degree = degree1[0];
      // console.log(student);

      const particular = {
        studentDetail,
        degree,
      };
      // console.log(particular);
      result.push(particular);
    }

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "All Degrees HEC", result)
    );
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

export const getVerifiedHECDegree = async (req, res) => {
  try {
    const list = await Degree.find({
      $and: [
        {
          studentVerified: true,
          organisationVerified: true,
          HECVerified: true,
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
          "Program",
          "GraduatingYear",
        ])
        .exec();

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      const degree = degree1[0];
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

export const getUnvserifiedHECDegree = async (req, res) => {
  try {
    const list = await Degree.find({
      $and: [
        {
          studentVerified: true,
          organisationVerified: true,
          HECVerified: false,
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
          "Program",
          "GraduatingYear",
        ])
        .exec();

      const degree1 = await Degree.find({ studentID: student }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
      ]);
      const degree = degree1[0];
      // console.log(student);

      const particular = {
        studentDetail,
        degree,
      };
      // console.log(particular);
      result.push(particular);
    }

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "HEC Unverified Degrees", result)
    );
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
