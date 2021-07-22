const pinoHttp = require("pino-http");
const { nanoid } = require("nanoid");

const level = process.env.LOG_LEVEL || "info";
const nodeEnv = process.env.NODE_ENV || "development";
const prettyPrint = nodeEnv === "development";
const logger = pinoHttp({
  genReqId: (request) => request.headers["x-request-id"] || nanoid(),
  level,
  prettyPrint,
});

module.exports = logger;
// this code is to allow us to configure the logger
//In the above code, if the request has an X-Request-ID header, the value of that header will be used as the request ID. Otherwise, nanoid() is called to generate a new ID

// Node converts all header keys to lowercase, so it does not matter what case is used in the original request. You will access the header using all lowercase characters in the key.

//Also note that the above code is using the LOG_LEVEL environment variable to set the log level for the logger. For pino, the log level can be one of the following values: fatal, error, warn, info, debug, trace, or silent. If the LOG_LEVEL is not set, the default will be info.
