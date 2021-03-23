const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(string, key) {

    let stringLen = string.length;
    let keyTransform = key.repeat(Math.ceil(stringLen/key.length)).slice(0, stringLen);
    let res = '';
    let i = 0;

    for (let key of string) {
      if (this.alphabet.indexOf(key.toUpperCase()) != '-1') {
        let a = this.alphabet.indexOf(keyTransform[i].toUpperCase());
        let b = this.alphabet.indexOf(key.toUpperCase());
        let c = a + b >= 26 ? a + b - 26 : a + b;
        res += this.alphabet[c];
        i++;
      } else {
        res += key;
      }
    }
    return !this.reverse ? res.split('').reverse().join('') : res;
  }

  decrypt(string, key) {
    let stringLen = string.length;
    let keyTransform = key.repeat(Math.ceil(stringLen/key.length)).slice(0, stringLen);
    let res = '';
    let i = 0;

    for (let key of string) {
      if (this.alphabet.indexOf(key) != '-1') {
        let a = this.alphabet.indexOf(keyTransform[i].toUpperCase());
        let b = this.alphabet.indexOf(key);
        let c = 26 - a + b >= 26 ? 26 - a + b - 26: 26 - a + b;
        res += this.alphabet[c];
        i++;
      } else {
        res += key;
      }
    }
    return !this.reverse ? res.split('').reverse().join('') : res;
  }
}

module.exports = VigenereCipheringMachine;
