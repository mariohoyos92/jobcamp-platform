const winston = require("winston");
const { formatter, timestamp } = require("winston-console-formatter")();
// const path = require("path");

// define the custom settings for each transport (file, console)
const options = {
  //   file: {
  //     level: "info",
  //     filename: path.join(__dirname, "..", "logs", "winston.log"),
  //     handleExceptions: true,
  //     json: true,
  //     colorize: false,
  //     formatter,
  //     timestamp
  //   },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
    prettyPrint: true,
    humanReadableUnhandledException: true,
    formatter,
    timestamp
  }
};

// instantiate a new Winston Logger with the settings defined above
const logger = new winston.Logger({
  transports: [
    // new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  }
};

module.exports = logger;
