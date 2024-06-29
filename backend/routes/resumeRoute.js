const express = require("express");
const resumeController = require("./../controllers/resumeController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(protect, resumeController.getAllResume)
  .post(protect, resumeController.createResume);

router.route("/:id").get(protect, resumeController.getResume);

router.route("/:id/update").patch(protect, resumeController.updateDetails);

module.exports = router;
