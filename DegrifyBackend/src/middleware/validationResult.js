import { validationResult } from "express-validator";

export const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ statusCode: 400, message: errors.array()[0].msg, data: null });
  }
  next();
};
