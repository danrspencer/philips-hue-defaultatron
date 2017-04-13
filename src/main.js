const rp = require("request-promise");

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
  rp("https://www.google.com").then(result => console.log(result));

mainLoop(pollInterval, program);
