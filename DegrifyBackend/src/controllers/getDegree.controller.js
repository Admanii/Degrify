import bcrypt from "bcrypt";
import Degree from "../models/Degree.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";
import Student from "../models/Student.js";
import User from "../models/User.js";
import { ethers } from "ethers";

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
          "organisationID",
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
    const degree = await Degree.findById(req.query.degree_id).select([
      "_id",
      "studentID",
      "studentVerified",
      "organisationVerified",
      "HECVerified",
      "completeVerified",
      "dateCreated",
      "ipfsLink",
      "hashValue",
    ]);

    if (!degree) {
      return res.json(
        jsonGenerate(statusCode.CLIENT_ERROR, "No Degree Found", degree)
      );
    }

    var StudentDetails1 = await Student.findById(degree.studentID).select([
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
      "organisationID",
      "TotalCreditHours",
      "CGPA",
    ]);
    console.log(StudentDetails1._id);
    var org = await Student.findById(StudentDetails1._id)
      .select("")
      .populate(["organisationID"])
      .exec();
    console.log(org);
    var user = await User.findOne({
      studentID: StudentDetails1._id,
    })
      .select("email")
      .exec();

    let orgName = org?.organisationID?.name ?? "";
    let email = user?.email ?? "";
    console.log(orgName + " " + email);
    var studentDetails = {
      ...StudentDetails1._doc,
      orgName,
      email,
    };
    const appendlist = {
      degree,
      studentDetails,
    };
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Information", appendlist)
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed", err)
    );
  }
};

export const getDegreeByStudentID = async (req, res) => {
  try {
    const degree = await Degree.findOne({
      studentID: req.query.student_id,
    }).select([
      "_id",
      "studentID",
      "studentVerified",
      "organisationVerified",
      "HECVerified",
      "completeVerified",
      "dateCreated",
      "ipfsLink",
      "hashValue",
    ]);
    if (!degree) {
      return res.json(
        jsonGenerate(statusCode.CLIENT_ERROR, "No Degree Found", degree)
      );
    }
    return res.json(jsonGenerate(statusCode.SUCCESS, "Exists", degree));
  } catch (err) {
    console.log(err);
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply", err)
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
        jsonGenerate(statusCode.CLIENT_ERROR, "No Degree Found", list)
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
          "organisationID",
          "TotalCreditHours",
          "CGPA",
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
        "ipfsLink",
        "hashValue",
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
        jsonGenerate(statusCode.CLIENT_ERROR, "No Degree Found", list)
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
          "organisationID",
          "TotalCreditHours",
          "CGPA",
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
        "ipfsLink",
        "hashValue",
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

export const getCompleteVerifiedDegrees = async (req, res) => {
  try {
    const list = await Degree.find({ completeVerified: true }).select([
      "-_id",
      "studentID",
    ]);

    if (!list) {
      return res.json(
        jsonGenerate(statusCode.CLIENT_ERROR, "No Degree Found", list)
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
          "organisationID",
          "TotalCreditHours",
          "CGPA",
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
        "ipfsLink",
        "hashValue",
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
    console.log("kkk");
    const array = Object.values(list);

    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
      const studentId = array[i].studentID;
      console.log(studentId);
      const studentDetail = await Student.findById(studentId)
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
          "organisationID",
          "TotalCreditHours",
          "CGPA",
        ])
        .exec();
      console.log(studentDetail._id);
      var list1 = await Student.findById(studentDetail._id).select([
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
        "organisationID",
        "TotalCreditHours",
        "CGPA",
      ]);
      var org = await Student.findById(studentDetail._id)
        .select("")
        .populate(["organisationID"])
        .exec();
      var user = await User.findOne({
        studentID: studentDetail._id,
      })
        .select("email")
        .exec();

      let orgName = org?.organisationID?.name ?? "";
      let email = user?.email ?? "";
      const studentDetails = {
        ...list1._doc,
        orgName,
        email,
      };
      const degree = await Degree.findOne({ studentID: studentId }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
        "ipfsLink",
        "hashValue",
      ]);

      const particular = {
        studentDetails,
        degree,
      };
      // console.log(particular);
      result.push(particular);
    }

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "All Degrees University", result)
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

export const getVerifiedUniversityDegree = async (req, res) => {
  try {
    const list = await Degree.find({
      $and: [
        {
          organisationID: req.query.organisation_id,
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
      const studentId = array[i].studentID;
      const studentDetail = await Student.findById(studentId)
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
          "organisationID",
          "TotalCreditHours",
          "CGPA",
        ])
        .exec();
      var list1 = await Student.findById(studentDetail._id).select([
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
        "organisationID",
        "TotalCreditHours",
        "CGPA",
      ]);
      var org = await Student.findById(studentDetail._id)
        .select("")
        .populate(["organisationID"])
        .exec();
      var user = await User.findOne({
        studentID: studentDetail._id,
      })
        .select("email")
        .exec();

      let orgName = org?.organisationID?.name ?? "";
      let email = user?.email ?? "";
      const studentDetails = {
        ...list1._doc,
        orgName,
        email,
      };
      const degree = await Degree.findOne({ studentID: studentId }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
        "ipfsLink",
        "hashValue",
      ]);

      const particular = {
        studentDetails,
        degree,
      };
      // console.log(particular);
      result.push(particular);
    }

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Verified Degrees University", result)
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
    console.log(array.length);

    for (let i = 0; i < array.length; i++) {
      const studentId = array[i].studentID;
      console.log(studentId);
      const studentDetail = await Student.findById(studentId)
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
          "organisationID",
          "TotalCreditHours",
          "CGPA",
        ])
        .exec();
      console.log("kkllls");
      console.log(studentDetail._id);
      var list1 = await Student.findById(studentDetail._id).select([
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
        "organisationID",
        "TotalCreditHours",
        "CGPA",
      ]);
      //console.log("kk");
      var org = await Student.findById(studentDetail._id)
        .select("")
        .populate(["organisationID"])
        .exec();

      var user = await User.findOne({
        studentID: studentDetail._id,
      })
        .select("email")
        .exec();

      let orgName = org?.organisationID?.name ?? "";
      let email = user?.email ?? "";
      const studentDetails = {
        ...list1._doc,
        orgName,
        email,
      };
      const degree = await Degree.findOne({ studentID: studentId }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
        "ipfsLink",
        "hashValue",
      ]);

      const particular = {
        studentDetails,
        degree,
      };
      // console.log(particular);
      result.push(particular);
      //console.log(result);
    }

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Unverified Degrees University", result)
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
      const studentId = array[i].studentID;
      const studentDetail = await Student.findById(studentId)
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
          "organisationID",
          "TotalCreditHours",
          "CGPA",
        ])
        .exec();
      var list1 = await Student.findById(studentDetail._id).select([
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
        "organisationID",
        "TotalCreditHours",
        "CGPA",
      ]);
      var org = await Student.findById(studentDetail._id)
        .select("")
        .populate(["organisationID"])
        .exec();
      var user = await User.findOne({
        studentID: studentDetail._id,
      })
        .select("email")
        .exec();

      let orgName = org?.organisationID?.name ?? "";
      let email = user?.email ?? "";
      const studentDetails = {
        ...list1._doc,
        orgName,
        email,
      };
      const degree = await Degree.findOne({ studentID: studentId }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
        "ipfsLink",
        "hashValue",
      ]);

      const particular = {
        studentDetails,
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
        jsonGenerate(statusCode.CLIENT_ERROR, "No Degree Found", list)
      );
    }
    const result = [];

    const array = Object.values(list);

    for (let i = 0; i < array.length; i++) {
      const studentId = array[i].studentID;
      const studentDetail = await Student.findById(studentId)
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
          "organisationID",
          "TotalCreditHours",
          "CGPA",
        ])
        .exec();
      var list1 = await Student.findById(studentDetail._id).select([
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
        "organisationID",
        "TotalCreditHours",
        "CGPA",
      ]);
      var org = await Student.findById(studentDetail._id)
        .select("")
        .populate(["organisationID"])
        .exec();
      var user = await User.findOne({
        studentID: studentDetail._id,
      })
        .select("email")
        .exec();

      let orgName = org?.organisationID?.name ?? "";
      let email = user?.email ?? "";
      const studentDetails = {
        ...list1._doc,
        orgName,
        email,
      };
      const degree = await Degree.findOne({ studentID: studentId }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
        "ipfsLink",
        "hashValue",
      ]);

      const particular = {
        studentDetails,
        degree,
      };
      // console.log(particular);
      result.push(particular);
    }

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "HEC Verified Degrees", result)
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

export const getHECVerifiedDegreesByUni = async (req, res) => {
  try {
    const list = await Degree.find({
      organisationID: req.query.organisation_id,
      studentVerified: true,
      organisationVerified: true,
      HECVerified: true,
      active: true,
    }).select(["-_id", "studentID"]);

    if (!list) {
      return res.json(
        jsonGenerate(statusCode.CLIENT_ERROR, "No Degree Found", list)
      );
    }
    const result = [];

    const array = Object.values(list);

    for (let i = 0; i < array.length; i++) {
      const studentId = array[i].studentID;
      const studentDetail = await Student.findById(studentId)
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
          "organisationID",
          "TotalCreditHours",
          "CGPA",
        ])
        .exec();
      var list1 = await Student.findById(studentDetail._id).select([
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
        "organisationID",
        "TotalCreditHours",
        "CGPA",
      ]);
      var org = await Student.findById(studentDetail._id)
        .select("")
        .populate(["organisationID"])
        .exec();
      var user = await User.findOne({
        studentID: studentDetail._id,
      })
        .select("email")
        .exec();

      let orgName = org?.organisationID?.name ?? "";
      let email = user?.email ?? "";
      const studentDetails = {
        ...list1._doc,
        orgName,
        email,
      };
      const degree = await Degree.findOne({ studentID: studentId }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
        "ipfsLink",
        "hashValue",
      ]);

      const particular = {
        studentDetails,
        degree,
      };
      // console.log(particular);
      result.push(particular);
    }

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "HEC Verified Degrees", result)
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
      const studentId = array[i].studentID;
      const studentDetail = await Student.findById(studentId)
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
          "organisationID",
          "TotalCreditHours",
          "CGPA",
        ])
        .exec();
      var list1 = await Student.findById(studentDetail._id).select([
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
        "organisationID",
        "TotalCreditHours",
        "CGPA",
      ]);
      var org = await Student.findById(studentDetail._id)
        .select("")
        .populate(["organisationID"])
        .exec();
      var user = await User.findOne({
        studentID: studentDetail._id,
      })
        .select("email")
        .exec();

      let orgName = org?.organisationID?.name ?? "";
      let email = user?.email ?? "";
      const studentDetails = {
        ...list1._doc,
        orgName,
        email,
      };
      const degree = await Degree.findOne({ studentID: studentId }).select([
        "_id",
        "studentID",
        "studentVerified",
        "organisationVerified",
        "HECVerified",
        "completeVerified",
        "dateCreated",
        "ipfsLink",
        "hashValue",
      ]);

      const particular = {
        studentDetails,
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

export const getDegreebyHash = async (req, res) => {
  try {
    const degree = await Degree.findOne({
      hashValue: req.query.hashValue,
    }).select([
      "_id",
      "studentID",
      "studentVerified",
      "organisationVerified",
      "HECVerified",
      "completeVerified",
      "dateCreated",
      "ipfsLink",
      "hashValue",
    ]);

    if (!degree) {
      return res.json(
        jsonGenerate(statusCode.CLIENT_ERROR, "No Degree Found", degree)
      );
    }

    var StudentDetails1 = await Student.findById(degree.studentID).select([
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
      "organisationID",
      "TotalCreditHours",
      "CGPA",
    ]);

    var org = await Student.findById(StudentDetails1._id)
      .select("")
      .populate(["organisationID"])
      .exec();

    var user = await User.findOne({
      studentID: StudentDetails1._id,
    })
      .select("email")
      .exec();

    let orgName = org?.organisationID?.name ?? "";
    let email = user?.email ?? "";
    console.log(orgName + " " + email);
    var studentDetails = {
      ...StudentDetails1._doc,
      orgName,
      email,
    };
    const appendlist = {
      degree,
      studentDetails,
    };
    if (typeof window !== "undefined") {
      const contractAddress = "0x553952fd4267A6BAb54903E11F46804A400AB326";
      const abi = [
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "tokenURI",
              type: "string",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "degreeId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: true,
              internalType: "address",
              name: "studentAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "ERP",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isVerified",
              type: "bool",
            },
          ],
          name: "DegreeAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "degreeId",
              type: "uint256",
            },
          ],
          name: "DegreeVerified",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string",
              name: "_ERP",
              type: "string",
            },
            {
              internalType: "string",
              name: "_tokenURI",
              type: "string",
            },
          ],
          name: "addDegree",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "degrees",
          outputs: [
            {
              internalType: "string",
              name: "tokenURI",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "degreeId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "bool",
              name: "isVerified",
              type: "bool",
            },
            {
              internalType: "string",
              name: "ERP",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllDegrees",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "tokenURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "degreeId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isVerified",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "ERP",
                  type: "string",
                },
              ],
              internalType: "struct UniversityDegrees.Degree[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_ERP",
              type: "string",
            },
          ],
          name: "getDegreeByERP",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "tokenURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "degreeId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isVerified",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "ERP",
                  type: "string",
                },
              ],
              internalType: "struct UniversityDegrees.Degree",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalDegrees",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);

      const contract = new ethers.Contract(contractAddress, abi, signer);
      console.log("hell");
      let getting = await contract.getDegreeByERP(StudentDetails1.studentID);
      console.log(getting);
      console.log("llkk");
    }
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Information", appendlist)
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Error", err)
    );
  }
};

export const getDegreeCountByYear = async (req, res) => {
  try {
    const pipeline = [
      {
        $lookup: {
          from: "students",
          let: { studentID: "$studentID" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$_id", "$$studentID"] },
              },
            },
          ],
          as: "studentData",
        },
      },
      {
        $match: {
          studentVerified: true,
          organisationVerified: true,
        },
      },
      {
        $group: {
          _id: { $arrayElemAt: ["$studentData.GraduatingYear", 0] },
          count: { $sum: 1 },
        },
      },
    ];
    Degree.aggregate(pipeline, function (err, results) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Degrees by Year", results)
      );
    });
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply", err)
    );
  }
};

export const getDegreeCountByOrganisation = async (req, res) => {
  try {
    const pipeline = [
      {
        $lookup: {
          from: "organisations",
          let: { organisationID: "$organisationID" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$_id", "$$organisationID"] },
              },
            },
          ],
          as: "OrganisationData",
        },
      },
      {
        $match: {
          studentVerified: true,
          organisationVerified: true,
        },
      },
      {
        $group: {
          _id: { $arrayElemAt: ["$OrganisationData.name", 0] },
          count: { $sum: 1 },
        },
      },
    ];
    Degree.aggregate(pipeline, function (err, results) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Degrees by University", results)
      );
    });
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply", err)
    );
  }
};

export const getVerifiedDegreeCount = async (req, res) => {
  try {
    const list = await Degree.find({
      studentVerified: true,
      organisationVerified: true,
      HECVerified: true,
      active: true,
    }).select("");

    if (!list) {
      return res.json(
        jsonGenerate(statusCode.CLIENT_ERROR, "No Degree Found", list)
      );
    }
    var count = { count: list.length };
    return res.json(
      jsonGenerate(statusCode.CLIENT_ERROR, "Degrees Found", count)
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
