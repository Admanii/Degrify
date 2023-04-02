import mongoose from "mongoose";

const recruiterSchema = mongoose.Schema({
  name: {
    type: String,
  },
  recuiterNumber: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  employeeID: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: Date,
    required: true,
  },
  CNIC: {
    type: String,
    required: true,
    min: 13,
    unique: "This recruiter already exists",
  },
  active: {
    type: Boolean,
    default: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Recruiter", recruiterSchema);
