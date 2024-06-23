const mongoose = require("mongoose");

const resumeModel = new mongoose.Schema({
  name: String,
  email: String,
});

const Resume = new mongoose.model("Resume", resumeModel);

module.exports = Resume;
