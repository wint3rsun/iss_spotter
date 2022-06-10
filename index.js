const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const {IP, LATITUDE, LONGITUDE } = require('./sensitive');

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