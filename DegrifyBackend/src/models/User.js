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
    enum: ["ADMIN", "USER"],
    required: true,
  },
});

export default mongoose.model("User", userSchema);
