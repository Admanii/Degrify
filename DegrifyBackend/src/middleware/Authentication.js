import Jwt from "jsonwebtoken";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";

const AuthMiddleware = (req, res, next) => {
  if (req.headers["auth"] === undefined) {
    return res.json(jsonGenerate(statusCode.AUTH_ERROR, "Excess denied"));
  }

  const token = req.headers["auth"];

  try {
    const decoded = Jwt.verify(
      token,
      "e282a3561a61b57de67ebb20a2f7a4e83fb9f27ac4fa0774525e9aa7fee8cf84",
      (err, payload) => {
        if (err) {
          console.log(err);
          return;
        }
        req.payload = payload;
      }
    );
    console.log(decoded);

    req.userId = decoded.userId;

    return next();
  } catch (error) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Invalid token")
    );
  }
};

export default AuthMiddleware;
