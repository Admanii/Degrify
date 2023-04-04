import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  courseNum: {
    type: String,
    default: false,
  },
  courseDesc: {
    type: String,
    default: false,
  },
  degreeProg: {
    type: String,
    default: false,
  },
  creditHours: {
    type: Number,
    default: false,
  },
  HECVerified: {
    type: Boolean,
    default: false,
  },
  LinkedToDegree: {
    type: Boolean,
    default: false,
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

export default mongoose.model("Course", courseSchema);
