const uuid = require("uuid/v4");

function JobPost(
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
) {
  this.jobPostId = uuid();
  this.datePosted = Date.now();
  this.position = position;
  tags && (this.tags = tags);
  this.location = location;
  this.remoteOk = remoteOk;
  this.jobDescription = jobDescription;
  salary && (this.salary = salary);
  howToApply && (this.howToApply = howToApply);
  this.applyURL = applyURL || applyEmail;
  this.applyMethod = applyURL ? "url" : "email";
  this.companyName = companyName;
  companyTwitter && (this.companyTwitter = companyTwitter);
  this.companyEmail = companyEmail;
  companyLogo = this.companyLogo = companyLogo;
  this.highlight = highlight;
  highlightColor && (this.highlightColor = highlightColor);
}

module.exports = { JobPost };
