const { docClient } = require("../db/dynamo");

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

module.exports = {
  getAllJobPosts
};
