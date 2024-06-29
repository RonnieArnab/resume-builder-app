const express = require("express");
const resumeController = require("./../controllers/resumeController");

const router = express.Router();

router
  .route("/")
  .get(resumeController.getAllResume)
  .post(resumeController.createResume);

router.route("/:userId/userId").get(resumeController.getResumebyUserId);
router.route("/:id/resumeId").get(resumeController.getResumebyId);

router.route("/:id/update").patch(resumeController.updateDetails);

module.exports = router;
