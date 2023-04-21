import Course from "../models/Course.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";
import mongoose from "mongoose";

export const AddCourse = async (req, res) => {
  const {
    courseNum,
    courseDesc,
    degreeProg,
    creditHours,
    HECVerified,
    LinkToDegree,
  } = req.body;

  const courseExist = await Course.findOne({
    $or: [
      {
        courseID: req.query.course_id,
      },
    ],
  });

  if (courseExist) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Course already Exists")
    );
  }

  try {
    const result = await Course.create({
    courseNum: courseNum,
    courseDesc:courseDesc,
    degreeProg:degreeProg,
    creditHours:creditHours,
    HECVerified:HECVerified,
    LinkToDegree:LinkToDegree,
    });

    res.json(
      jsonGenerate(statusCode.SUCCESS, "Course Registration successfull", {
        courseID: result._id,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = async (req, res) => {
  const newCourse = {
    courseID: req.body.courseID,
    courseNum: req.body.courseNum,
    courseDesc: req.body.courseDesc,
    degreeProg: req.body.degreeProg,
    creditHours: req.body.creditHours,
    HECVerified: req.body.HECVerified,
    LinkToDegree: req.body.LinkToDegree,
  };

  const isLinked = await Course.findById(req.userId).select("LinkToDegree");

  if (isLinked.LinkToDegree !== true) {
    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "You are not authorised to delete courses which are already linked to a degree or transcript"
      )
    );
  }
  try {
    const deleted = await Course.findByIdAndUpdate(
      req.query.course_id,
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
      jsonGenerate(statusCode.SUCCESS, "the Course Deleted", deleted)
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

export const updateCourse = async (req, res) => {
  try {
    const newUser = {
      courseID: req.body.courseID,
    courseNum: req.body.courseNum,
    courseDesc: req.body.courseDesc,
    degreeProg: req.body.degreeProg,
    creditHours: req.body.creditHours,
    HECVerified: req.body.HECVerified,
    LinkToDegree: req.body.LinkToDegree,
    };

    const updated = await Course.findByIdAndUpdate(
      req.query.course_id,
      {
        newUser,
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
        "Profile of the Course Updated",
        updated
      )
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Error is displaying ", err)
    );
  }
};

export const getAllCourse = async (req, res) => {
  try {
    var appendedList = {};
    var array = new Array();
    const allCourses = await Course.find({
      organisationID: req.query.organisation_id,
      active: true,
    }).select([
    "courseNum",
    "courseDesc",
    "degreeProg",
    "creditHours",
    "HECVerified",
    "LinkToDegree",
    "organisationID",
    ]);
    for (var i = 0; i < allCourses.length; i++) {
      var org = await Course.findById(allCourses[i]._id)
        .select("")
        .populate(["organisationID"])
        .exec();
      

      let orgName = org?.organisationID?.name ?? "";
      appendedList = {
        ...allCourses[i]._doc,
        orgName,
      };
      array.push(appendedList);
    }

    return res.json(jsonGenerate(statusCode.SUCCESS, "All Courses", array));
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Some Error is found", err)
    );
  }
};

export const getCourse = async (req, res) => {
  try {
    var org = await Course.findById(req.query.course_id)
      .select("")
      .populate(["organisationID"])
      .exec();

    var list = await Course.findById(req.query.course_id).select([
      "courseNum",
    "courseDesc",
    "degreeProg",
    "creditHours",
    "HECVerified",
    "LinkToDegree",
    "organisationID",
    ]);

    let orgName = org?.organisationID?.name ?? "";
    console.log(orgName + "here");
    const appendedList = {
      ...list._doc,
      orgName,
    };
    console.log(appendedList);
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Profile of the Course", appendedList)
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

export const getCoursebyUni = async (req, res) => {
  try {
    const pipeline = [
      {
        $group: {
          _id: "$organisationID",
          count: { $sum: 1 },
        },
      },
    ];
    Course.aggregate(pipeline, function (err, results) {
      if (err) {
        return res.status(500).json({ error: err });
      }
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Courses by Uni", results)
      );
    });
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply", err)
    );
  }
};

export const getCoursebyProg = async (req, res) => {
  try {
    const pipeline = [
      {
        $group: {
          _id: "$degreeProg",
          count: { $sum: 1 },
        },
      },
    ];
    Course.aggregate(pipeline, function (err, results) {
      if (err) {
        return res.status(500).json({ error: err });
      }
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Courses by Program", results)
      );
    });
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply", err)
    );
  }
};

export const getCoursebyProgAndUni = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          organisationID: mongoose.Types.ObjectId(req.query.organisation_id),
        },
      },
      {
        $group: {
          _id: "$degreeProg",
          count: { $sum: 1 },
        },
      },
    ];
    Course.aggregate(pipeline, function (err, results) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Courses by Prog and Uni", results)
      );
    });
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Failed to disply", err)
    );
  }
};

