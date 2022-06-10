const { nextISSTimesForMyLocation } = require('./iss');
//const {IP, LATITUDE, LONGITUDE } = require('./sensitive');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Try again sweetie: ", error);
//     return;
//   }
//   console.log("SUCCESS! IP is: ", ip);
// });

// fetchCoordsByIP( IP, (error, coordinates) => {
//   if (error) {
//     console.log("Try again sweetie: ", error);
//     return;
//   }
//   console.log("SUCCESS! geoCoord is: ", coordinates);
// });

// fetchISSFlyOverTimes ({ LATITUDE, LONGITUDE }, (error, data) => {
//   if (error) {
//     console.log("Try again girlie~ ", error);
//     return;
//   }
//   console.log("Success the fly times are: ", data);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);

    const duration = pass.duration;

    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, nextFlyTimes)=> {
  if (error) {
    console.log("Error Alert! Details Below.\n", error);
    return;
  }

  console.log("The next fly times at your IP address are:");
  printPassTimes(nextFlyTimes);

});