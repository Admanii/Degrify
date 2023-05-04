import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { hashCal } from "../middleware/HashCalculate.js";
import Student from "../models/Student.js";
import User from "../models/User.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";
import Organistation from "../models/Organistation.js";

export const Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Username or password not exists"
      )
    );
  }

  const verified = bcrypt.compareSync(password, user.password);

  if (!verified) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Username or password not exists"
      )
    );
  }
  const token = jwt.sign(
    { userId: user._id },
    "e282a3561a61b57de67ebb20a2f7a4e83fb9f27ac4fa0774525e9aa7fee8cf84",
    {
      expiresIn: "100d",
    }
  );
  const hash = hashCal(token);
  if (user.userRole === "STUDENT") {
    const studentDetails = await Student.findById(user.studentID)
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

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Login Succesfull", {
        userInfo: {
          user,
          studentDetails,
        },
        token: token,
        hash: hash,
      })
    );
  }
  if (user.userRole === "HEC" || user.userRole === "UNIVERSITY") {
    const organistionDetails = await Organistation.findById(user.organisationID)
      .select("")
      .populate(["name", "phoneNumber", "address"])
      .exec();

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Login Succesfull", {
        userInfo: {
          user,
          organistionDetails,
        },
        token: token,
        hash: hash,
      })
    );
  }
  if (user.userRole === "RECRUITER") {
    const recruiterDetails = await Student.findById(user.studentID)
      .select("")
      .populate(["name", "recuiterNumber", "fatherName", "employeeID", "CNIC"])
      .exec();
  }

  return res.json(
    jsonGenerate(statusCode.SUCCESS, "Login Succesfull but must be admin", {
      token: token,
      hash: hash,
    })
  );
};

export const registerStudent = async (req, res) => {
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
    email,
    password,
    organisationID,
  } = req.body;

  const userRole = 'UNIVERSITY';

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
      jsonGenerate(statusCode.CLIENT_ERROR, "Student already Exists")
    );
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const userExist = await User.findOne({
      $or: [
        {
          email: email,
        },
      ],
    });
    if (userExist) {
      return res.json(
        jsonGenerate(statusCode.CLIENT_ERROR, "User Email already Exists")
      );
    }

    const student = await Student.create({
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
      organisationID: organisationID,
    });
    const result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      userRole: userRole,
      studentID: student._id,
    });
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Registration successfull", {
        studentDetails: result,
      })
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Error Found", {
        error: err,
      })
    );
  }
};

export const registerOrganisation = async (req, res) => {
  const { name, phoneNumber, address, email, password, userRole } = req.body;

  const organisationExist = await Organistation.findOne({
    $or: [
      {
        name: name,
      },
    ],
  });

  if (organisationExist) {
    return res.json(
      jsonGenerate(statusCode.CLIENT_ERROR, "Organisation Already exist")
    );
  }

  try {
    const userExist = await User.findOne({
      $or: [
        {
          email: email,
        },
      ],
    });
    if (userExist) {
      return res.json(
        jsonGenerate(statusCode.CLIENT_ERROR, "User Email already Exists", null)
      );
    }

    const organisation = await Organistation.create({
      name: name,
      phoneNumber: phoneNumber,
      address: address,
      userRole: userRole,
    });
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      userRole: userRole,
      organisationID: organisation._id,
    });
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Registration successfull", {
        organistionDetails: result,
      })
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Error Found", {
        error: err,
      })
    );
  }
};

export const Register = async (req, res) => {
  const { name, email, password, userRole } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const userExist = await User.findOne({
    $or: [
      {
        email: email,
      },
    ],
  });
  if (userExist) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Users already Exists")
    );
  }
  try {
    const result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      userRole: userRole,
      studentID: "",
    });

    res.json(
      jsonGenerate(statusCode.SUCCESS, "Registration successfull", {
        userId: result._id,
        // token: token,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

// 1st api call/route
// Register student
// create student
// pass returned studentid into user

// 2nd api call
// add degree with student details

// 1st api call/route
// Register organisation
// create organisation
// pass returned organisationid into user

// change response in login controller ( return all details)

// get student find by id

// get organisation find by id
