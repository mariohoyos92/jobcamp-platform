const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2"
});

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
  dynamodb,
  docClient
};
