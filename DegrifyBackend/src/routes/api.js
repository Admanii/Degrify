import express from "express";
import { AddDegree } from "../controllers/Degree/AddDegree.controller.js";
import { HECAppovedDegree } from "../controllers/Degree/DegreeHECApproved.controller.js";
import AddStudent from "../controllers/Student/AddStudent.controller.js";
import { deleteStudent } from "../controllers/Student/DeleteStudent.controller.js";
import AddRecruiter from "../controllers/Recruiter/AddRecruiter.controller";
import { DeleteRecruiter } from "../controllers/Recruiter/DeleteRecruiter.controller";
import AddCourse from "../controllers/Course/AddCourse.controller";
import { DeleteCourse } from "../controllers/Course/DeleteCourse.controller";
import { Login, Register } from "../controllers/User/usercontroller.js";

export const apiRoute = express.Router();
export const apiProtected = express.Router();

// this was just for checking purpose
// apiRoute.post("/signup", Register);
// apiRoute.post("/login", Login);

apiProtected.post("/adddegree", AddDegree);
apiProtected.post("/hecapproveddegree", HECAppovedDegree);
apiProtected.post("/addstudent", AddStudent);
apiProtected.post("/deletestudent", deleteStudent);
apiProtected.post("/addrecruiter", AddRecruiter);
apiProtected.post("/deleterecruiter", DeleteRecruiter);
apiProtected.post("/addcourse", AddCourse);
apiProtected.post("/deletecourse", DeleteCourse);
