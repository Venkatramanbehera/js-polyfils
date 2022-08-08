const memoized = (cb) => {
  let cache = [];
  return (...args) => {
    if (cache[JSON.stringify(args)]) {
      console.log("from cache", cache);
      return cache[JSON.stringify(args)];
    } else {
      cache[JSON.stringify(args)] = cb(...args);
      console.log("Result being calculated....");
      return cache[JSON.stringify(args)];
    }
  };
};
function add(num1, num2) {
  return num1 + num2;
}

const memoizedAdd = memoized(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
