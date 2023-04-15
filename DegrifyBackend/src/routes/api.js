import express from "express";
import { AddDegree } from "../controllers/AddDegree.controller.js";
import {
  CompleteAppovedDegree,
  HECAppovedDegree,
  OrganisationAppovedDegree,
  StudentAppovedDegree,
} from "../controllers/DegreeApproved.controller.js";

import {
  Login,
  Register,
  registerOrganisation,
  registerStudent,
} from "../controllers/usercontroller.js";
import { AddCourse, deleteCourse } from "../controllers/course.controller.js";

import {
  getAllDegrees,
  getCompleteVerifiedDegrees,
  getHECAllDegree,
  getHECVerifiedDegrees,
  getOrganisationVerifiedDegrees,
  getStudentVerifiedDegrees,
  getUniversityAllDegree,
  getUnvserifiedHECDegree,
} from "../controllers/getDegree.controller.js";
import {
  AddRecruiter,
  deleteRecruiter,
} from "../controllers/Recruiter.controller.js";
import {
  AddStudent,
  deleteStudent,
  getAllStudent,
} from "../controllers/studentcontroller.js";

export const apiRoute = express.Router();
export const apiProtected = express.Router();

// Register and SignUp
apiRoute.post("/signupstudent", registerStudent);
apiRoute.post("/signuporganisation", registerOrganisation);
apiRoute.post("/login", Login);

apiProtected.post("/addstudent", AddStudent);
apiProtected.post("/deletestudent", deleteStudent);
apiProtected.post("/addrecruiter", AddRecruiter);
apiProtected.post("/deleterecruiter", deleteRecruiter);
apiProtected.post("/addcourse", AddCourse);
apiProtected.post("/deletecourse", deleteCourse);

// post approved degrees
apiProtected.post("/adddegree", AddDegree);
apiProtected.post("/hecapproveddegree", HECAppovedDegree);
apiProtected.post("/studentapproveddegree", StudentAppovedDegree);
apiProtected.post("/organisationapproveddegree", OrganisationAppovedDegree);
apiProtected.post("/completeapproveddegree", CompleteAppovedDegree);

// get degrees
apiProtected.get("/getalldegree", getAllDegrees);
apiProtected.get("/getstudentverifieddegree", getStudentVerifiedDegrees);
apiProtected.get(
  "/getorganisationverifieddegree",
  getOrganisationVerifiedDegrees
);

apiProtected.get("/getcompleteverifieddegree", getCompleteVerifiedDegrees);

// all degrees by HEC
apiProtected.get("/gethecdegree", getHECAllDegree);
// verified Degree by HEC
apiProtected.get("/getverifiedhecdegree", getHECVerifiedDegrees);
// Unverified Degree by HEC
apiProtected.get("/getunverifiedhecdegree", getUnvserifiedHECDegree);
// all degrees by UniID
apiProtected.get("/getuniversitydegree", getUniversityAllDegree);
// verified Degree by UniID
apiProtected.get("/getverifieduniversitydegree", getHECVerifiedDegrees);
// Unverified Degree by UniID
apiProtected.get("/getunverifieduniversitydegree", getUnvserifiedHECDegree);
// get all students
apiProtected.get("/getallStudents", getAllStudent);
