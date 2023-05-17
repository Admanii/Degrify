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
import {
  AddCourse,
  deleteCourse,
  updateCourse,
  getCourse,
  getAllCourse,
  getCoursebyProg,
  getCoursebyProgAndUni,
  getCoursebyUni,
} from "../controllers/course.controller.js";

import {
  getAllDegrees,
  getCompleteVerifiedDegrees,
  getDegreeByID,
  getDegreeByStudentID,
  getDegreebyHash,
  getHECAllDegree,
  getHECVerifiedDegrees,
  getOrganisationVerifiedDegrees,
  getStudentVerifiedDegrees,
  getUniversityAllDegree,
  getUnverifiedUniversityDegree,
  getUnvserifiedHECDegree,
  getVerifiedUniversityDegree,
} from "../controllers/getDegree.controller.js";
import {
  AddRecruiter,
  deleteRecruiter,
} from "../controllers/Recruiter.controller.js";
import {
  AddStudent,
  deleteStudent,
  getAllStudent,
  getStudent,
  getStudentbyProgram,
  getStudentbyProgramAndUni,
  getStudentbyUni,
  getStudentbyYear,
  getStudentbyYearAndUni,
  updateStudent,
} from "../controllers/studentcontroller.js";
import {
  getOrganisationByID,
  getUniversities,
} from "../controllers/organisation.controller.js";
import {
  organisationRegister,
  studentRegister,
  studentUpdate,
} from "../middleware/validator.js";
import { validateResult } from "../middleware/validationResult.js";

export const apiRoute = express.Router();
export const apiProtected = express.Router();

// Register and SignUp
apiRoute.post(
  "/signupstudent",
  studentRegister,
  validateResult,
  registerStudent
); // done
apiRoute.post(
  "/signuporganisation",
  organisationRegister,
  validateResult,
  registerOrganisation
); // done
apiRoute.post("/login", Login); // done

//apiProtected.post("/addstudent", AddStudent);
//apiProtected.post("/deletestudent", deleteStudent);

apiProtected.post("/addrecruiter", AddRecruiter);
apiProtected.post("/deleterecruiter", deleteRecruiter);

apiProtected.post("/addcourse", AddCourse);
apiProtected.post("/deletecourse", deleteCourse);
apiProtected.post("/updatecourse", updateCourse);
apiProtected.get("/getcourse", getCourse);
apiProtected.get("/getallcourse", getAllCourse);
apiProtected.get("/getcoursebyuni", getCoursebyUni);
apiProtected.get("/getcoursebyprog", getCoursebyProg);
apiProtected.get("/getcoursebyproganduni", getCoursebyProgAndUni);

// post approved degrees
apiProtected.post("/adddegree", AddDegree); // done
apiProtected.post("/hecapproveddegree", HECAppovedDegree); // done
apiProtected.post("/studentapproveddegree", StudentAppovedDegree); // done
apiProtected.post("/organisationapproveddegree", OrganisationAppovedDegree); // done

apiProtected.post("/completeapproveddegree", CompleteAppovedDegree); // ??
apiProtected.get("/getcompleteverifieddegree", getCompleteVerifiedDegrees); // ??

// get degrees
// apiProtected.get("/getalldegree", getAllDegrees);
// apiProtected.get("/getorganisationverifieddegree", getOrganisationVerifiedDegrees);

// get organisation and university
apiProtected.get("/getuniversities", getUniversities); // done

// all degrees by HEC
apiProtected.get("/getalldegreeshec", getHECAllDegree); // done
// verified Degree by HEC
apiProtected.get("/getverifieddegreeshec", getHECVerifiedDegrees); // done
// Unverified Degree by HEC
apiProtected.get("/getunverifieddegreeshec", getUnvserifiedHECDegree); // done

// all degrees by UniID
apiProtected.get("/getalldegreesuniversity", getUniversityAllDegree); // done
// verified Degree by UniID
apiProtected.get("/getverifieddegreesuniversity", getVerifiedUniversityDegree); // done
// Unverified Degree by UniID
apiProtected.get(
  "/getunverifieddegreesuniversity",
  getUnverifiedUniversityDegree
); // done

// get all students
apiProtected.get("/getallStudents", getAllStudent); // done
apiProtected.get("/studentsbyyear", getStudentbyYear);
apiProtected.get("/studentsbyuni", getStudentbyUni);
apiProtected.get("/studentsbyprogram", getStudentbyProgram);
apiProtected.get("/studentsbyprogramanduni", getStudentbyProgramAndUni);
apiProtected.get("/studentsbyyearanduni", getStudentbyYearAndUni);

// get details by ID
apiProtected.get("/getstudentbyid", getStudent); // done
apiProtected.get("/getdegreebyid", getDegreeByID);
apiRoute.get("/getdegreebyhash", getDegreebyHash);
apiProtected.get("/getdegreebystudentid", getDegreeByStudentID); // done
apiProtected.get("/getorganisationbyid", getOrganisationByID); // done

// will do this if required
apiProtected.get("/getstudentverifieddegrees", getStudentVerifiedDegrees);

apiProtected.post("/updatestudentbyid", studentUpdate, validateResult, updateStudent); 
