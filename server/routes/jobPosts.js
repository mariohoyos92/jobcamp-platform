const express = require("express");
const router = express.Router();
const jobPostController = require("../controllers/jobPostController");

router.get("/all", jobPostController.getAllJobPosts);
router.post("/newPost", jobPostController.addJobPost);

module.exports = router;
