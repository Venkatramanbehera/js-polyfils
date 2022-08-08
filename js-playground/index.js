// Q1 - sum of the array without using reduce method

const nums = [1, 2, 3, 4, 5];

// console.log(" Without Reduce sum of the array");
const sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
const result = sumOfArray(nums);
// console.log(result);

// Q2 - sum of the array using reduce method
// console.log(" With Reduce ");
const res = nums.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

// console.log(res);

// Q3 - max of array
// console.log(" Without Reduce max of the array");
const maximumWithoutReducer = (nums) => {
  let maxElement = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxElement) {
      maxElement = nums[i];
    }
  }
  return maxElement;
};

const maxi = maximumWithoutReducer(nums);
// console.log(maxi);
// Q4 - max using reducer
// console.log(" With Reduce ");
const resultMaxi = nums.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
// console.log(resultMaxi);
