const express = require("express")
const router = express.Router();
const controller =  require('../controllers/portfolio.controller')
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/resume-parser',upload.single('file'),controller.resumeParser)
router.post('/create-new',controller.createPortfolio)
router.post('/fetch',controller.fetchPortfolio)
router.post('/fetch-portfolio-list',controller.fetchPortfolioList)
router.post('/update',controller.updatePortfolio)

module.exports = router;