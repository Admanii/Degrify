import bcrypt from "bcrypt";
import Student from "../models/Student.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";
import User from "../models/User.js";
import mongoose from "mongoose";
import { all } from "axios";

export const AddStudent = async (req, res) => {
  const {
    name,
    enrollmentNumber,
    fatherName,
    studentID,
    DateOfBirth,
    CNIC,
    DateOfAdmission,
    DateOfompletion,
    Program,
    GraduatingYear,
  } = req.body;

  const studentExist = await Student.findOne({
    $or: [
      {
        studentID: studentID,
      },
      {
        CNIC: CNIC,
      },
    ],
  });
  if (studentExist) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Student already Exists")
    );
  }
  try {
    const result = await Student.create({
      name: name,
      enrollmentNumber: enrollmentNumber,
      fatherName: fatherName,
      studentID: studentID,
      DateOfBirth: DateOfBirth,
      CNIC: CNIC,
      DateOfAdmission: DateOfAdmission,
      DateOfompletion: DateOfompletion,
      Program: Program,
      GraduatingYear: GraduatingYear,
    });

    res.json(
      jsonGenerate(statusCode.SUCCESS, "Student Registered", {
        studentMongoID: result._id,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = async (req, res) => {
  const newUser = {
    name: req.body.name,
    enrollmentNumber: req.body.enrollmentNumber,
    fatherName: req.body.fatherName,
    studentID: req.body.studentID,
    DateOfBirth: req.body.DateOfBirth,
    CNIC: req.body.CNIC,
    DateOfAdmission: req.body.DateOfAdmission,
    DateOfompletion: req.body.DateOfompletion,
    Program: req.body.Program,
    GraduatingYear: req.body.GraduatingYear,
  };

  const isAdmin = await User.findById(req.userId).select("userRole");

  if (isAdmin.userRole !== "ADMIN") {
    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "You are not authorised to delete profile"
      )
    );
  }
  try {
    const deleted = await Student.findByIdAndUpdate(
      req.query.student_id,
      {
        active: false,
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
        "Profile of the Student Deleted",
        deleted
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

export const updateStudent = async (req, res) => {
  try {
    const {
      name,
      enrollmentNumber,
      fatherName,
      studentID,
      DateOfBirth,
      CNIC,
      DateOfAdmission,
      DateOfompletion,
      Program,
      GraduatingYear,
      TotalCreditHours,
      CGPA,
    } = req.body;

    const studentExist = await Student.findById(req.query.student_id);

    if (!studentExist) {
      return res.json(
        jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Student Does not Exists")
      );
    }

    const date1 = new Date(DateOfAdmission);
    const Admissionyear = date1.getFullYear();
    const date2 = new Date(DateOfBirth);
    const birthYear = date2.getFullYear();
    const date = new Date(DateOfompletion);
    const Completionyear = date.getFullYear();

    console.log(Completionyear);
    if (Completionyear - Admissionyear < 4) {
      return res.json(
        jsonGenerate(
          statusCode.CLIENT_ERROR,
          "4 years difference required between Admissionyear and Completionyear"
        )
      );
    }

    if (Admissionyear - birthYear < 16) {
      return res.json(
        jsonGenerate(
          statusCode.CLIENT_ERROR,
          "16 years difference required between Admissionyear and birthYear"
        )
      );
    }

    if (Completionyear.toString() !== GraduatingYear.toString()) {
      return res.json(
        jsonGenerate(
          statusCode.CLIENT_ERROR,
          "CompletionYear and GraduatingYear must be same"
        )
      );
    }
    console.log("kk");
    const newUser = {
      name: name,
      enrollmentNumber: enrollmentNumber,
      fatherName: fatherName,
      studentID: studentID,
      DateOfBirth: DateOfBirth,
      CNIC: CNIC,
      DateOfAdmission: DateOfAdmission,
      DateOfompletion: DateOfompletion,
      Program: Program,
      GraduatingYear: GraduatingYear,
      TotalCreditHours: TotalCreditHours,
      CGPA: CGPA,
    };

    console.log(newUser);

    const updatedUser = await Student.findByIdAndUpdate(
      req.query.student_id,
      newUser,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    console.log(updatedUser);

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Student Profile Updated", updatedUser)
    );
  } catch (err) {
    console.log(err);
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Error is displaying", err)
    );
  }
};

export const getAllStudent = async (req, res) => {
  try {
    var appendedList = {};
    var array = new Array();
    const allStudents = await Student.find({
      organisationID: req.query.organisation_id,
      active: true,
    }).select([
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
    for (var i = 0; i < allStudents.length; i++) {
      var org = await Student.findById(allStudents[i]._id)
        .select("")
        .populate(["organisationID"])
        .exec();
      var user = await User.findOne({
        studentID: allStudents[i]._id,
      })
        .select("email")
        .exec();

      let orgName = org?.organisationID?.name ?? "";
      let email = user?.email ?? "";
      appendedList = {
        ...allStudents[i]._doc,
        orgName,
        email,
      };
      array.push(appendedList);
    }

    return res.json(jsonGenerate(statusCode.SUCCESS, "All Students", array));
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Some Error is found", err)
    );
  }
};

export const getStudent = async (req, res) => {
  try {
    var org = await Student.findById(req.query.student_id)
      .select("")
      .populate(["organisationID"])
      .exec();
    var user = await User.findOne({
      studentID: req.query.student_id,
    })
      .select("email")
      .exec();

    var list = await Student.findById(req.query.student_id).select([
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

    let orgName = org?.organisationID?.name ?? "";
    let email = user?.email ?? "";
    console.log(orgName + "here");
    const appendedList = {
      ...list._doc,
      orgName,
      email,
    };
    console.log(appendedList);
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Profile of the Student", appendedList)
    );
  } catch (error) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying profile",
        error
      )
    );
  }
};

export const getStudentbyYear = async (req, res) => {
  try {
    // const field = req.query.field;
    const pipeline = [
      {
        $group: {
          _id: "$GraduatingYear",
          count: { $sum: 1 },
        },
      },
    ];
    Student.aggregate(pipeline, function (err, results) {
      if (err) {
        return res.status(500).json({ error: err });
      }
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Students by Year", results)
      );
    });

    // select count(StudentID), Year from Students group by Year
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply", err)
    );
  }
};

export const getStudentbyUni = async (req, res) => {
  try {
    const pipeline = [
      {
        $group: {
          _id: "$organisationID",
          count: { $sum: 1 },
        },
      },
    ];
    Student.aggregate(pipeline, function (err, results) {
      if (err) {
        return res.status(500).json({ error: err });
      }
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Students by Year", results)
      );
    });
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply", err)
    );
  }
};

export const getStudentbyProgram = async (req, res) => {
  try {
    const pipeline = [
      {
        $group: {
          _id: "$Program",
          count: { $sum: 1 },
        },
      },
    ];
    Student.aggregate(pipeline, function (err, results) {
      if (err) {
        return res.status(500).json({ error: err });
      }
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Students by Program", results)
      );
    });
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply", err)
    );
  }
};

export const getStudentbyProgramAndUni = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          organisationID: mongoose.Types.ObjectId(req.query.organisation_id),
        },
      },
      {
        $group: {
          _id: "$Program",
          count: { $sum: 1 },
        },
      },
    ];
    Student.aggregate(pipeline, function (err, results) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Students by Program", results)
      );
    });
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply", err)
    );
  }
};

export const getStudentbyYearAndUni = async (req, res) => {
  try {
    // const field = req.query.field;
    const pipeline = [
      {
        $match: {
          organisationID: mongoose.Types.ObjectId(req.query.organisation_id),
        },
      },
      {
        $group: {
          _id: "$GraduatingYear",
          count: { $sum: 1 },
        },
      },
    ];
    console.log(req.query.organisation_id);
    Student.aggregate(pipeline, function (err, results) {
      if (err) {
        return res.status(500).json({ error: err });
      }
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Students by Year", results)
      );
    });

    // select count(StudentID), Year from Students group by Year
  } catch (err) {
    console.log(err);
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply", err)
    );
  }
};

export const getStudentERP = async (req, res) => {
  try {
    var appendedList = {};
    var array = new Array();
    const allStudents = await Student.find({
      organisationID: req.query.organisation_id,
      active: true,
    }).select([
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
      "dateCreated",
    ]);

    var differenceMs = Date.now() - allStudents[0].dateCreated.getTime();
    //console.log(allStudents);
    // console.log(allStudents.length);
    var ERP = allStudents[0].studentID;
    //console.log(differenceMs);

    for (var i = 1; i < allStudents.length; i++) {
      //console.log(allStudents[i]._id);
      var org = await Student.findById(allStudents[i]._id)
        .select("")
        .populate(["studentID", "dateCreated"])
        .exec();
      //console.log(org.studentID + " " + org.dateCreated);
      const mm = Date.now() - org.dateCreated.getTime();

      if (mm < differenceMs) {
        differenceMs = mm;
        //console.log(differenceMs);
        ERP = org.studentID;
        //console.log(differenceMs);
      }
    }

    var newERP = parseInt(ERP);
    while (true) {
      var check = await Student.findOne({ studentID: newERP });
      if (check) {
        newERP = newERP + 1;
      } else {
        break;
      }
    }

    const data = { ERP: newERP + 1 };

    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "New ERP", data)
    );
  } catch (err) {
    console.log(err);
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply")
    );
  }
};
