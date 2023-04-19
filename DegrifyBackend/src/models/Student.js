import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  enrollmentNumber: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  studentID: {
    type: String,
    required: true,
    // unique: "Already Exist",
  },
  DateOfBirth: {
    type: Date,
    required: true,
  },
  CNIC: {
    type: String,
    required: true,
    min: 13,
    unique: "This student already exists",
  },
  DateOfAdmission: {
    type: Date,
    required: true,
  },
  DateOfompletion: {
    type: Date,
    required: true,
  },
  Program: {
    type: String,
    required: true,
  },
  GraduatingYear: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  organisationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organisation",
    required: true,
  },
});

export default mongoose.model("Student", studentSchema);

// add organisation id in student model
