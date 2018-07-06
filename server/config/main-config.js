(function(appConfig) {
  "use strict";

  // *** main dependencies *** //
  const bodyParser = require("body-parser");
  const morgan = require("morgan");
  const cors = require("cors");
  const compression = require("compression");
  const Logger = require("../lib/logger");

  // *** load environment variables *** //
  require("dotenv").config();

  appConfig.init = function(app, express) {
    // *** view engine *** //
    app.set("view engine", "html");

    // *** app middleware *** //
    if (process.env.NODE_ENV !== "test") {
      app.use(morgan("dev", { stream: Logger.stream }));
    }

    app.use(compression());
    app.use(express.static(`${__dirname}/../build/`));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
  };
})(module.exports);
