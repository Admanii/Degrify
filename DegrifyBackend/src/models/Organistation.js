import mongoose from "mongoose";

const organisationSchema = mongoose.Schema({
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
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  category: [
    {
      categoryID: {
        type: Number,
        unique: "This ID already exist",
      },
      categoryName: {
        type: String,
        required: true,
      },
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Organisation", organisationSchema);
