import bcrypt from "bcrypt";
import Organistation from "../../models/Organistation.js";

const Login = async (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { email, password } = req.body;
    const user = await Organistation.findOne({ username: username });

    if (!user) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Username or password not exists"
        )
      );
    }
    const verified = bcrypt.compareSync(password, user.password);

    if (!verified) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Username or password not exists"
        )
      );
    }
    if (!user.active) {
      return res.json(
        jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Username is deleted")
      );
    }
  }
};

// LogIn is from university
// LogIn is from HEC
// LogIn is from Admin
// Register User
// get degree for recruiter and print message
// get single degree
// get all OrganisationApproved Degree
// get all HECAppoved Degree
// update degree information by student
// write SHA-256 hash generator in JavaScript
// degree aprroval from Organisation and HEC
// add organisation
// delete organisation
// update organisation
//
