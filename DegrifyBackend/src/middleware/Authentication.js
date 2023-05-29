import Jwt from "jsonwebtoken";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";

const AuthMiddleware = (req, res, next) => {
  if (req.headers["authorization"] === undefined) {
    return res.json(jsonGenerate(statusCode.AUTH_ERROR, "Excess denied"));
  }

  // const token = req.headers["auth"];
  //console.log(token);

  const authHeader = req.headers["authorization"];
  const bearerToken = authHeader.split(" ");
  const token = bearerToken[1];

  try {
    const decoded = Jwt.verify(
      token,
      process.env.key
    );
    console.log(decoded);

    req.userId = decoded.userId;

    return next();
  } catch (error) {
    return res.json(
      console.log(error),
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Invalid token")
    );
  }
};

export default AuthMiddleware;
