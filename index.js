const { fetchMyIP, fetchCoordsByIP } = require('./iss');
const {IP, } = require('./sensitive');

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