(function(routeConfig) {
  "use strict";

  routeConfig.init = function(app) {
    // *** routes *** //
    const jobPostRoutes = require("../routes/jobPosts");
    // *** middlewares *** //
    // *** register routes *** //
    app.use("/api/jobPosts", jobPostRoutes);
  };
})(module.exports);
