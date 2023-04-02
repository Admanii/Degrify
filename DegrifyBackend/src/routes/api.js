import express from "express";
import { AddDegree } from "../controllers/Degree/AddDegree.controller.js";
import { HECAppovedDegree } from "../controllers/Degree/DegreeHECApproved.controller.js";
import AddStudent from "../controllers/Student/AddStudent.controller.js";
import { deleteStudent } from "../controllers/Student/DeleteStudent.controller.js";
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
