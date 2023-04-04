import express from "express";
import { AddDegree } from "../controllers/Degree/AddDegree.controller.js";
import { HECAppovedDegree } from "../controllers/Degree/DegreeHECApproved.controller.js";
import { AddStudent } from "../controllers/Student/AddStudent.controller.js";
import { deleteStudent } from "../controllers/Student/DeleteStudent.controller.js";

import { Login, Register } from "../controllers/User/usercontroller.js";

import { deleteRecruiter } from "../controllers/Recruiter/DeleteRecruiter.controller.js";
import { AddCourse } from "../controllers/Course/AddCourse.controller.js";
import { deleteCourse } from "../controllers/Course/DeleteCourse.controller.js";
import { getAllDegrees } from "../controllers/Degree/getAllDegree.controller.js";
import { AddRecruiter } from "../controllers/Recruiter/AddRecruiter.controller.js";

export const apiRoute = express.Router();
export const apiProtected = express.Router();

// this was just for checking purpose
apiRoute.post("/signup", Register);
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
