import { check } from "express-validator";
export const studentRegister = [
  check("name", "Name is required").notEmpty().trim().escape(),
  check("email", "Incorrect Email Syntax").isEmail(),
  check("password", "Password should be 6 or more characters").isLength({
    min: 6,
  }),
  check("studentID", "studentID is required")
    .notEmpty()
    .trim()
    .escape()
    .isLength({
      min: 5,
      max: 5,
    }),
  check("DateOfBirth", "DateOfBirth is required").notEmpty(),
  check("CNIC", "CNIC should be 13 characters").isLength({
    min: 13,
    max: 13,
  }),
  check("TotalCreditHours", "Total Credit Hours is required").notEmpty().trim().escape(),
];

export const organisationRegister = [
  check("name", "Name is required").notEmpty().trim().escape(),
  check("email", "Email with correct syntax is required")
    .isEmail()
    .normalizeEmail(),
  check("password", "Password should be 6 or more characters").isLength({
    min: 6,
  }),
  check("phoneNumber", "Phone Number is required").notEmpty().trim().escape(),
];


export const studentUpdate = [
  check("name", "Name is required").notEmpty().trim().escape(),
  check("studentID", "studentID is required")
    .notEmpty()
    .trim()
    .escape()
    .isLength({
      min: 5,
      max: 5,
    }),
  check("DateOfBirth", "DateOfBirth is required").notEmpty(),
  check("CNIC", "CNIC should be 13 characters").isLength({
    min: 13,
    max: 13,
  }),
  check("TotalCreditHours", "Total Credit Hours is required").notEmpty().trim().escape(),
];