const express = require("express");
const router = express.Router();
const jobPostController = require("../controllers/jobPostController");

router.get("/all", jobPostController.getAllJobPosts);

module.exports = router;
