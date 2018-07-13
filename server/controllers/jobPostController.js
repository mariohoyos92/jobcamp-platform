const { docClient } = require("../db/dynamo");
const { JobPost } = require("../utils/jobPost");
const getAllJobPosts = (req, res) => {
  let params = {
    TableName: "jobPosts"
  };

  docClient.scan(params, (err, jobPosts) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "error", message: "error retrieving job jobPosts" });
    } else {
      console.log(jobPosts);
      res.status(200).json({ status: "success", jobPosts });
    }
  });
};

const addJobPost = (req, res) => {
  const {
    position,
    tags,
    location,
    remoteOk,
    jobDescription,
    salary,
    howToApply,
    applyURL,
    applyEmail,
    companyName,
    companyTwitter,
    companyEmail,
    companyLogo,
    highlight,
    highlightColor
  } = req.body;
  const jobToPost = new JobPost(
    position,
    tags,
    location,
    remoteOk,
    jobDescription,
    salary,
    howToApply,
    applyURL,
    applyEmail,
    companyName,
    companyTwitter,
    companyEmail,
    companyLogo,
    highlight,
    highlightColor
  );
  let params = {
    TableName: "jobPosts",
    Item: jobToPost
  };
  docClient.put(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        status: "error",
        message: "Error creating new job post"
      });
    } else {
      res.status(200).json(jobToPost);
    }
  });
};
module.exports = {
  getAllJobPosts,
  addJobPost
};
