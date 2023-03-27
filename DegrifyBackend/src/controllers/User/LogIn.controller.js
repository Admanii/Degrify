import bcrypt from "bcrypt";
import Organistation from "../../models/Organistation.js";

export const Login = async (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { emsil, password } = req.body;
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
