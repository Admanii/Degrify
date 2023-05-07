import bcrypt from "bcrypt";
import Degree from "../models/Degree.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";
import Student from "../models/Student.js";
import User from "../models/User.js";

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
    if (!degree) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "No Degree Found", list)
      );
    }
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
      return res.json(jsonGenerate(statusCode.CLIENT_ERROR, "Not Exists"));
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
        jsonGenerate(statusCode.SUCCESS, "No Degree Found", list)
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
    if (!degree) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "No Degree Found", list)
      );
    }
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
