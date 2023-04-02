import Recruiter from "../../models/Recruiter.js";
import User from "../../models/User.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";

export const deleteRecruiter = async (req, res) => {
  const newUser = {
    name: req.body.name,
    recuiterNumber: req.body.recuiterNumber,
    fatherName: req.body.fatherName,
    employeeID: req.body.employeeID,
    DateOfBirth: req.body.DateOfBirth,
    CNIC: req.body.CNIC,
  };

  const isAdmin = await User.findById(req.userId).select("userRole");

  if (isAdmin.userRole !== "ADMIN") {
    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "You are not authorised to delete admin profile"
      )
    );
  }
  try {
    const deleted = await Recruiter.findByIdAndUpdate(
      req.query.recruiter_id,
      {
        active: false,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "Profile of the Recruiter Deleted",
        deleted
      )
    );
  } catch (error) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying ",
        error
      )
    );
  }
};
