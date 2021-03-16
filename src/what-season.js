const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(data) {

 if (!data) return 'Unable to determine the time of year!';

 
 if (isNaN(data)) {
 	throw new Error('Not implemented');
 }

 if (!(data instanceof Date)) {
    throw new Error('Not implemented');
    return null;
  }

	let m = data.getMonth();
	if (m === 11 || m === 0 || m === 1) return 'winter'; 
	if (m >= 2 && m <= 4) return 'spring';
	if (m >= 5 && m <= 7) return 'summer';
	if (m >= 8 && m <= 10) return 'autumn'; 
};
