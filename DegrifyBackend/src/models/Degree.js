import mongoose from "mongoose";

const degreeSchema = mongoose.Schema({
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  organisationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organisation",
  },
  studentVerified: {
    type: Boolean,
    default: false,
  },
  organisationVerified: {
    type: Boolean,
    default: false,
  },
  HECVerified: {
    type: Boolean,
    default: false,
  },
  completeVerified: {
    type: Boolean,
    default: false,
  },
  ipfsLink: {
    type: String,
  },
  hashValue: {
    type: String,
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

export default mongoose.model("Degree", degreeSchema);

// studentid, name, program, date of issue, graduating year , cnic, fatherName, DateOfBirth

// add degree with student details
