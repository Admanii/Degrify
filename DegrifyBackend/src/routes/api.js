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
  getHECVerifiedDegrees,
  getOrganisationVerifiedDegrees,
  getStudentVerifiedDegrees,
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
apiProtected.get("/gethecverifieddegree", getHECVerifiedDegrees);
apiProtected.get("/getcompleteverifieddegree", getCompleteVerifiedDegrees);

// get all students
apiProtected.get("/getallStudents", getAllStudent);
