const num = [1, 3, 5, 7, 9, 10];

Array.prototype.polyFilter = function (callback) {
  var result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const result = num.polyFilter((numb) => {
  return numb % 2 === 0;
});

console.log(result);
