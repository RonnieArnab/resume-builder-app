const Resume = require("./../models/resumeModel");

exports.getAllResume = async (req, res) => {
  try {
    const resumes = await Resume.find();

    res.status(200).json({
      status: "success",
      length: resumes.length,
      data: resumes,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createResume = async (req, res) => {
  try {
    const resume = await Resume.create(req.body);

    res.status(200).json({
      status: "success",
      data: resume,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
