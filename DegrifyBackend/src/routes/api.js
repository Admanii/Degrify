import express from "express";
import { AddDegree } from "../controllers/Degree/AddDegree.controller.js";
import { HECAppovedDegree } from "../controllers/Degree/DegreeHECApproved.controller.js";

import {
  Login,
  Register,
  registerOrganisation,
  registerStudent,
} from "../controllers/User/usercontroller.js";
import { deleteRecruiter } from "../controllers/Recruiter/DeleteRecruiter.controller.js";
import { AddCourse } from "../controllers/Course/AddCourse.controller.js";
import { deleteCourse } from "../controllers/Course/DeleteCourse.controller.js";
import { getAllDegrees } from "../controllers/Degree/getAllDegree.controller.js";
import { AddRecruiter } from "../controllers/Recruiter/AddRecruiter.controller.js";
import {
  AddStudent,
  deleteStudent,
  getAllStudent,
} from "../controllers/Student/studentcontroller.js";

export const apiRoute = express.Router();
export const apiProtected = express.Router();

// this was just for checking purpose
apiRoute.post("/signupstudent", registerStudent);
apiRoute.post("/signuporganisation", registerOrganisation);
apiRoute.post("/login", Login);

apiProtected.post("/adddegree", AddDegree);
apiProtected.post("/hecapproveddegree", HECAppovedDegree);
apiProtected.post("/addstudent", AddStudent);
apiProtected.post("/deletestudent", deleteStudent);
apiProtected.post("/addrecruiter", AddRecruiter);
apiProtected.post("/deleterecruiter", deleteRecruiter);
apiProtected.post("/addcourse", AddCourse);
apiProtected.post("/deletecourse", deleteCourse);

apiProtected.get("/getalldegree", getAllDegrees);
apiProtected.get("/getallStudents", getAllStudent);
