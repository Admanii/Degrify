import mongoose from "mongoose";
import express from "express";
const app = express();

import cloudinary from "cloudinary";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import { apiProtected, apiRoute } from "./src/routes/api.js";
import AuthMiddleware from "./src/middleware/Authentication.js";
//import "dotenv".config();

// connecting to mongodb
mongoose.set("strictQuery", false);
// mongoose
//   .connect(process.env.mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then(() => {
//     console.log("Database Connected!!");
//   })
//   .catch(() => {
//     console.log("Unable to connect to the database.");
//   });
mongoose.connect(
  "mongodb+srv://pawan5627:Umerkot@26@degrify.za5mexy.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (e) => console.log("Database Connected")
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(fileUpload());
app.use("/api/", apiRoute);
app.use("/api/", AuthMiddleware, apiProtected);
app.use(cors());

const port = process.env.PORT || 8000;

// starting the server
app.listen(port, () => {
  console.log(`Application is running at ${port}`);
});
