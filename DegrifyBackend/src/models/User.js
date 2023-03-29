import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    min: 6,
    max: 32,
    required: true,
    unique: "Email already exists",
  },
  password: {
    type: String,
    min: 6,
    max: 32,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userRole: {
    type: String,
    enum: ["ADMIN", "UNIVERSITY", "HEC", "RECRUITER"],
    required: true,
  },
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  organisationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organisation",
  },
});

export default mongoose.model("User", userSchema);

// organisationn ID, Admin ID,
// userRole Admin University HEC Student
