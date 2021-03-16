const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(s) {
  if (typeof(s) !== 'string' || s > 15 || s < 1 || !parseFloat(s)) {
    return false;
  }
 let k = 0.693 / HALF_LIFE_PERIOD;

 let t = (Math.log(15) - Math.log(s)) / k;

 return Math.ceil(t); 
};
