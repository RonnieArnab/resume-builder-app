const express = require("express");
const resumeController = require("./../controllers/resumeController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, resumeController.getAllResume)
  .post(resumeController.createResume);

module.exports = router;
