const nums = [1, 3, 5, 7, 9, 10];

Array.prototype.mapPoly = function (callback) {
  var resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};

const res = nums.mapPoly((num) => {
  return num * 2;
});

console.log(res);
