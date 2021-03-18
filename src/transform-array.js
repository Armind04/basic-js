const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let target = arr.concat();
  let res = [];

  for (let i = 0; i < target.length; i++) {

    if (target[i] === '--double-next') {
      if (i !== target.length - 1) {
        res.push(target[i + 1]);
      }

    } else if (target[i] === '--discard-next') {
      if (i !== target.length - 1) {
        target.splice(i + 1, 1);
      }

    } else if (target[i] === '--discard-prev') {
      if (target[i - 1] !== '--discard-next' && res.length) {
        res.pop();
      }

    } else if (target[i] === '--double-prev') {
      if (target[i - 1] !== '--discard-next' && res.length) {
        res.push(res[res.length - 1]);
      }
    } else {
      res.push(target[i]);
    }
  }

  return res;
};
