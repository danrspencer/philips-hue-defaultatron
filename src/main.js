const request = require("request-promise");
const R = require("rambda");
const YAML = require("yamljs");

/* --- */

const config = YAML.load("config.YAML");

const requiredConfig = ["username"];

/* --- */

const pollInterval = 1000;

const mainLoop = (interval, func) =>
  setTimeout(
    () => {
      try {
        func();
      } catch (ex) {
        console.log(ex.message);
      }

      mainLoop(interval, func);
    },
    pollInterval
  );

const program = () =>
  request({
    uri: "https://www.google.com",
    json: true
  }).then(result => console.log(result));

mainLoop(pollInterval, program);
