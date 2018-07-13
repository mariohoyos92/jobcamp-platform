const uuid = require("uuid/v4");

const { docClient } = require("../dynamo");

const JobPost = (
  position,
  tags,
  location,
  jobDescription,
  applyURL,
  applyEmail
) => {
  this.jobPostId = uuid();
  this.datePosted = Date.now();
  this.position = position;
  this.tags = tags;
  this.location = location;
  this.remoteOk = true;
  this.jobDescription = jobDescription;
  this.salary = "80-100k";
  this.howToApply =
    "Just click on the link below to be redirected to the application portal";
  this.apply = applyURL || applyEmail;
  this.applyMethod = applyURL ? "url" : "email";
  this.companyName = "Greatest Company Ever";
  this.companyTwitter = "hasslefreebeats";
  this.companyEmail = "mariohoyos92@gmail.com ";
  this.companyLogo = "https://picsum.photos/300/300/?image=166";
  this.highlight = true;
  this.highlightColor = "#ABCABC";

  return this;
};

const applyURL =
  "https://stackoverflow.com/jobs/154633/lead-open-source-developer-python-django-jbs-custom-software-solutions?ref=remoteok";

const positions = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Data Scientist",
  "Senior React Developer",
  "Mobile Application Developer"
];
const tags = ["Javascript", "Swift", "Node", "AWS", "SQL", "GraphQl", "Java"];
const cities = ["Austin", "Dallas", "Indianapolis"];
const states = [
  { value: "AK", text: "Alaska" },
  { value: "AL", text: "Alabama" },
  { value: "AR", text: "Arkansas" },
  { value: "AS", text: "American Samoa" },
  { value: "AZ", text: "Arizona" },
  { value: "CA", text: "California" },
  { value: "CO", text: "Colorado" },
  { value: "CT", text: "Connecticut" },
  { value: "DC", text: "District of Columbia" },
  { value: "DE", text: "Delaware" },
  { value: "FL", text: "Florida" },
  { value: "GA", text: "Georgia" },
  { value: "GU", text: "Guam" },
  { value: "HI", text: "Hawaii" },
  { value: "IA", text: "Iowa" },
  { value: "ID", text: "Idaho" },
  { value: "IL", text: "Illinois" },
  { value: "IN", text: "Indiana" },
  { value: "KS", text: "Kansas" },
  { value: "KY", text: "Kentucky" },
  { value: "LA", text: "Louisiana" },
  { value: "MA", text: "Massachusetts" },
  { value: "MD", text: "Maryland" },
  { value: "ME", text: "Maine" },
  { value: "MI", text: "Michigan" },
  { value: "MN", text: "Minnesota" },
  { value: "MO", text: "Missouri" },
  { value: "MS", text: "Mississippi" },
  { value: "MT", text: "Montana" },
  { value: "NC", text: "North Carolina" },
  { value: "ND", text: "North Dakota" },
  { value: "NE", text: "Nebraska" },
  { value: "NH", text: "New Hampshire" },
  { value: "NJ", text: "New Jersey" },
  { value: "NM", text: "New Mexico" },
  { value: "NV", text: "Nevada" },
  { value: "NY", text: "New York" },
  { value: "OH", text: "Ohio" },
  { value: "OK", text: "Oklahoma" },
  { value: "OR", text: "Oregon" },
  { value: "PA", text: "Pennsylvania" },
  { value: "PR", text: "Puerto Rico" },
  { value: "RI", text: "Rhode Island" },
  { value: "SC", text: "South Carolina" },
  { value: "SD", text: "South Dakota" },
  { value: "TN", text: "Tennessee" },
  { value: "TX", text: "Texas" },
  { value: "UT", text: "Utah" },
  { value: "VA", text: "Virginia" },
  { value: "VI", text: "Virgin Islands" },
  { value: "VT", text: "Vermont" },
  { value: "WA", text: "Washington" },
  { value: "WI", text: "Wisconsin" },
  { value: "WV", text: "West Virginia" },
  { value: "WY", text: "Wyoming" }
];

const zipCode = "12345";
const country = "United States";
let remoteOk = false;
let jobDescription =
  "%3Cp%3EABOUT%20BIT%20ZESTY%20We%20are%20an%20innovation%20agency%20specialising%20in%20making%20digital%20experiences%20that%20create%20real%20value%20for%20users%20and%20organisations.%20We%20make%20digital%20products%20for%20clients%20across%20a%20variety%20of%20industries%20including%20startups,%20large%20enterprises,%20charities%20and%20government%20bodies%20as%20well%20as%20building%20and%20maintaining%20our%20own%20SaaS%20products.%20We%20believe%20in%20creating%20a%20workplace%20where%20employees%20are%20given%20the%20opportunity%20to%20grow%20and%20better%20themselves,%20have%20their%20opinions%20heard,%20socialise%20with%20colleagues%20and%20genuinely%20enjoy%20the%20work%20they%20do%20every%20day.%20Our%20whole%20team%20is%20committed%20to%20working%20together%20to%20achieve%20industry-leading%20results.%3C/p%3E%3Cp%3EBEING%20A%20RUBY%20ON%20RAILS%20DEVELOPER%20AT%20BIT%20ZESTY%20As%20a%20Contract%20Lead%20Ruby%20on%20Rails%20Developer%20at%20Bit%20Zesty%20you%20will%20be%20working%20alongside%20the%20product%20management%20and%20UX%20design%20teams%20to%20make%20the%20products%20we%20build%20rock-solid%20and%20scalable.%20It%20is%20the%20perfect%20opportunity%20for%20someone%20who%20is%20experienced%20in%20creating%20dynamic%20web%20applications%20and%20passionate%20about%20clean%20code%20and%20is%20looking%20for%20a%20long%20term%20contract.%3C/p%3E%3Cp%3EDesign%3C/p%3E%3Cul%3E%3Cli%3ETake%20wireframes/mockups%20and%20user%20stories%20and%20build%20systems%20that%20meet%20the%20requirements%3C/li%3E%3Cli%3ECreate%20user-friendly%20web%20app%20interfaces%20by%20working%20closely%20with%20UX%20designers%20and%20front-end%20developers%3C/li%3E%3C/ul%3E%3Cp%3EDevelop%3C/p%3E%3Cul%3E%3Cli%3EDesign,%20build,%20and%20maintain%20efficient,%20reusable,%20and%20reliable%20Ruby%20code.%3C/li%3E%3Cli%3EDevops:%20improve%20automation%20of%20the%20software%20development%20process.%3C/li%3E%3Cli%3EIdentify%20performance%20issues%20and%20bugs,%20and%20provide%20solutions%20to%20these%20problems.%3C/li%3E%3C/ul%3E%3Cp%3ECollaborate%3C/p%3E%3Cul%3E%3Cli%3EWork%20with%20other%20team%20members%20to%20ensure%20we%20are%20building%20the%20right%20product%3C/li%3E%3Cli%3EParticipate%20in%20code%20reviews%3C/li%3E%3Cli%3EPair-program%20with%20other%20developers%20or%20discuss%20possible%20technical%20architectures%3C/li%3E%3Cli%3EContribute%20to%20creating%20a%20culture%20of%20writing%20excellent%20software%3C/li%3E%3C/ul%3E%3Cp%3EBenefits%3C/p%3E%3Cp%3EWHAT%20WE%20OFFER%3C/p%3E%3Cul%3E%3Cli%3EA%20friendly,%20open-minded%20and%20collaborative%20team%20working%20closely%20with%20the%20CTO%3C/li%3E%3Cli%3EAutonomy,%20we%20don't%20micromanage%20our%20teams%3C/li%3E%3Cli%3EChallenging%20environment%20-%20you%20will%20be%20working%20on%20complex%20projects%3C/li%3E%3C/ul%3E%3Cp%3EDay%20rate%20dependent%20on%20experience%20200-250%20EURO%3C/p%3E";

const testPost = JobPost(
  positions[0],
  [tags[0], tags[1]],
  { city: "Austin", state: "TX", country: "USA", zip: "12345" },
  jobDescription,
  applyURL
);

let params = {
  TableName: "jobPosts",
  Item: testPost
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to add item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("Added item:", params.Item);
    console.log(data);
  }
});
