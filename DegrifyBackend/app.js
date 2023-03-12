const mongoose = require("mongoose")
const express = require("express")
const app = express()

const cloudinary = require('cloudinary')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const fileUpload = require('express-fileupload')
const cors = require("cors")
require("dotenv").config();



// connecting to mongodb
mongoose.connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Database Connected!!")
}).catch(() => {
    console.log("Unable to connect to the database.")
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(fileUpload());
app.use(cors())

const port = process.env.PORT || 8000

// starting the server
app.listen(port, () => {
    console.log(`Application is running at ${port}`)
})

