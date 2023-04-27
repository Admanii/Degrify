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
import { ipfs } from "./src/middleware/HashCalculate.js";
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
  "mongodb+srv://osama:osama123@degrify.2zpqfy2.mongodb.net/degrify?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (e) => console.log(e)
);

mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});
mongoose.connection.on("error", (err) => {
  console.log(err.message);
});
mongoose.connection.on("disconnected", () => {
  console.log(" Mongoose got disconnected");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(cookieParser());
// app.use(fileUpload());
app.use("/api/", apiRoute);
app.use("/api/", AuthMiddleware, apiProtected);

const port = process.env.PORT || 8000;
//ipfs("this is fyp");
// starting the server
app.listen(port, () => {
  console.log(`Application is running at ${port}`);
});
