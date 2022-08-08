const arr = ["rajesh", "likun", "rakesh", "gulshan", "sachin"];

for (let i in arr) {
  console.log(i);
}

for (let i of arr) {
  console.log(i);
}

console.log(" --> object <-- ");

const user = {
  name: "chiku",
  age: 25,
  address: "deogarh",
};

for (let i in user) {
  console.log(i);
}

// for (let i of user) {
//   console.log(i);
// }
