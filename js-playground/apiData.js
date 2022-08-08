const users = [
  { firstName: "rajesh", lastName: "kumar", age: 23 },
  { firstName: "banki", lastName: "pradhan", age: 23 },
  { firstName: "donald", lastName: "trumph", age: 78 },
  { firstName: "elon", lastName: "mosc", age: 65 },
  { firstName: "elon", lastName: "jada", age: 65 },
];

// Q1 - list of full name
const fullName = users.map((user) => {
  return user.firstName + " " + user.lastName;
});

console.log(fullName);

// Q2 - find out all the age group and count from array
const ages = users.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = 1;
  } else {
    acc[curr.age] = acc[curr.age] + 1;
  }
  return acc;
}, {});

console.log(ages);

// Q3 - age is less then 30
const age30 = users
  .filter((user) => {
    return user.age <= 30;
  })
  .map((name) => {
    return name.firstName;
  });

console.log(age30);
// solve using reduce

const age2 = users.reduce((acc, curr) => {
  if (curr.age <= 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(age2);
