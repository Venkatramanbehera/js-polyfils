const nums = [1, 2, 3, 4, 5];

Array.prototype.reducePolyFills = function (callback, intialValue) {
  let accumulator = intialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};

const result = nums.reducePolyFills((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

console.log(result);
