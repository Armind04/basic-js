const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
   options.addition = '' + options.addition || ''; 

  function arrMaker(count, string) {
    if (string === 'undefined') return [];
    let arr = [];
    for (let i = 0; i < count; i++) { arr.push(string); }
    return arr; 
  }

  const a = arrMaker(options.additionRepeatTimes || 1, options.addition);

  const b = arrMaker(options.repeatTimes || 1, `${str}${a.join(options.additionSeparator || '|')}`)

  return b.join(options.separator || '+');
};
  