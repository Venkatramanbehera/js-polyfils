const arr = ["rajua", "liku", "liki", "om"];

Array.prototype.polyForEach = function (callback) {
  // this means - ['elements of array']
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.polyForEach((res, i) => {
  console.log(res, i);
});
