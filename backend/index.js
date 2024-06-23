const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoute");
const resumeRouter = require("./routes/resumeRoute");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

app.use(helmet());
app.use(mongoSanitize());

if (process.env.NODE_ENV == "development") app.use(morgan("dev"));

app.use(express.json());
// app.use((req, res, next) => {
//   console.log(req.headers);
//   next();
// });

app.use("/users", userRouter);
app.use("/resume", resumeRouter);

module.exports = app;
