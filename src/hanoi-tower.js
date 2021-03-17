const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let res = {turns: 0, seconds: 0}

  for (let i = 0; i < disksNumber; i++) {
    res.turns = res.turns * 2 + 1;
  }

  res.seconds = Math.floor(3600 / turnsSpeed * res.turns);

  return res;
};
