import { check } from "express-validator";
export const studentRegister = [
  check("name", "Name is required").notEmpty().trim().escape(),
  check("email", "Email is required").isEmail(),
  check("password", "Password should be 6 or more characters").isLength({
    min: 6,
  }),
  check("studentID", "studentID is required").notEmpty().trim().escape(),
  check("DateOfBirth", "DateOfBirth is required").notEmpty(),
  check("CNIC", "CNIC should be 13 characters").isLength({
    min: 13,
    max: 13,
  }),
];

export const organisationRegister = [
  check("name", "Name is required").notEmpty().trim().escape(),
  check("email", "Email is required").isEmail().normalizeEmail(),
  check("password", "Password should be 6 or more characters").isLength({
    min: 6,
  }),
  check("phoneNumber", "phoneNumber is required").notEmpty().trim().escape(),
];