const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoute");
const cors = require("cors");
const resumeRouter = require("./routes/resumeRoute");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());

if (process.env.NODE_ENV == "development") app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use("/users", userRouter);
app.use("/resume", resumeRouter);

module.exports = app;
