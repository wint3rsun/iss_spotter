const { nextISSTimesForMyLocation } = require('./iss_promised');
const { IP } = require('./sensitive');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);

    const duration = pass.duration;

    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log("The next fly times at your IP address are:");
    printPassTimes(passTimes);
  })
  .catch((err) => console.log("Whoops something went wrong: ", err.message));






