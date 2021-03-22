const CustomError = require("../extensions/custom-error");

const chainMaker = {
   buffer: [],

  getLength() {
    return this.buffer.length;
  },
  addLink(value = '') {
    this.buffer.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (this.buffer[position]) {
      this.buffer.splice(position - 1, 1);
      return chainMaker;
    } else {
      this.buffer = [];
      throw new Error('Uncorect position');
    }
    
  },
  reverseChain() {
    this.buffer = this.buffer.reverse();
    return chainMaker;
  },
  finishChain() {
    let res = this.buffer.join('~~');
    this.buffer = [];
    return res;
  }
}  

module.exports = chainMaker;
