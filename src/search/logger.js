// module.exports.debug = (msg) => {
//     //console.log(msg);
// }
// module.exports.info = (msg) => {
//    //console.log(msg);
// }

var appRoot = require('app-root-path');
var winston = require('winston');

const logFormat = winston.format.combine(
		 winston.format.colorize(),
		 winston.format.timestamp(),
		 winston.format.align(),
		 winston.format.printf(
		  info => `${info.timestamp} ${info.level}: ${info.message}`,
		),);

// define the custom settings for each transport (file, console)
var options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

// instantiate a new Winston Logger with the settings defined above
let logger = winston.createLogger({
	  format: logFormat,
	  transports: [
	    new (winston.transports.Console)(options.console)
	  ],
	  exitOnError: false, // do not exit on handled exceptions
	});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = logger;