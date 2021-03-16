const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  let a = arr.reduce((res, current) => {
    if (typeof current === 'string') {
      res = res + (current.trim()[0]).toUpperCase();
    }
    return res;
  }, '')

  return a.split('').sort().join('');
};
