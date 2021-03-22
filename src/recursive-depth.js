const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   count = 1;
  maxCount = 1;
  flag = false;

  calculateDepth(arr) {
    if (!this.flag) {
      this.count = 1;
    }  
    arr.forEach((i, index) => {
      if (!this.flag) {
        this.count = 1;
      }
    	if (Array.isArray(i)) {
    		this.count++;
        this.flag = true;
    		this.calculateDepth(i);
    	}
      this.maxCount = Math.max(this.count, this.maxCount);
      if (index == arr.length - 1) {
      this.count = this.maxCount;
      this.maxCount = 1;
    }
    })
    
    this.flag = false;
    return this.count;
  }
};
