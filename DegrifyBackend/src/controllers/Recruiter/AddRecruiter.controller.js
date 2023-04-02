import Recruiter from "../../models/Recruiter.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helper.js";

const AddRecruiter = async (req, res) => {
  const {
    name,
    recuiterNumber,
    fatherName,
    employeeID,
    DateOfBirth,
    CNIC,
  } = req.body;

  const recruiterExist = await Recruiter.findOne({
    $or: [
      {
        employeeID: employeeID,
      },
    ],
  });
  if (recruiterExist) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Recruiter already Exists")
    );
  }
  try {
    const result = await Recruiter.create({
      name: name,
      recuiterNumber: recuiterNumber,
      fatherName: fatherName,
      employeeID: employeeID,
      DateOfBirth: DateOfBirth,
      CNIC: CNIC,
    });

    res.json(
      jsonGenerate(statusCode.SUCCESS, "Recruiter Registered", {
        recruiterMongoID: result._id,
        // token: token,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export default AddRecruiter;
