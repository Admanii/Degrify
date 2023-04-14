import express from "express";
import { AddDegree } from "../controllers/Degree/AddDegree.controller.js";
import {
  CompleteAppovedDegree,
  HECAppovedDegree,
  OrganisationAppovedDegree,
  StudentAppovedDegree,
} from "../controllers/Degree/DegreeApproved.controller.js";

import {
  Login,
  Register,
  registerOrganisation,
  registerStudent,
} from "../controllers/User/usercontroller.js";
import { deleteRecruiter } from "../controllers/Recruiter/DeleteRecruiter.controller.js";
import { AddCourse } from "../controllers/Course/AddCourse.controller.js";
import { deleteCourse } from "../controllers/Course/DeleteCourse.controller.js";
import {
  getAllDegrees,
  getCompleteVerifiedDegrees,
  getHECVerifiedDegrees,
  getOrganisationVerifiedDegrees,
  getStudentVerifiedDegrees,
} from "../controllers/Degree/getAllDegree.controller.js";
import { AddRecruiter } from "../controllers/Recruiter/AddRecruiter.controller.js";
import {
  AddStudent,
  deleteStudent,
  getAllStudent,
} from "../controllers/Student/studentcontroller.js";

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
