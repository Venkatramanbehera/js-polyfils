const arr = ["wong", "jong", "mong", "nong"];

// for each
Array.prototype.polyForEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};

// filter
Array.prototype.polyFilter = function (callBack) {
  var resultArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      resultArray.push(this[i]);
    }
  }
  return resultArray;
};

// map
Array.prototype.polyMap = function (callBack) {
  var resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callBack(this[i], i, this));
  }
  return resultArray;
};

// Reduce
Array.prototype.polyReduce = function (callBack, intialValue = 0) {
  let accumulator = intialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callBack(accumulator, this[i]);
  }
  return accumulator;
};

arr.polyForEach((res) => {
  console.log(res);
});

const re = arr.polyFilter((name) => {
  return name.includes("w");
});

console.log(re);
const modified = arr.polyMap((result) => {
  return result + "a";
});
console.log(modified);

const numsArr = [1, 2, 3, 4, 5];
const num = numsArr.polyReduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

console.log(num);
