import express from "express";
import { Login, Register } from "../controllers/User/usercontroller.js";

export const apiRoute = express.Router();
export const apiProtected = express.Router();

// this was just for checking purpose
// apiRoute.post("/signup", Register);
// apiRoute.post("/login", Login);
