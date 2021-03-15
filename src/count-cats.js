const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr.reduce((res, current) => {
    return res + current.reduce((res, current) => {
      if (current === '^^') res++;
      return res;
    }, 0)
  }, 0)
};
