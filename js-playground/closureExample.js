// closure means that an inner function always has access to variable and parameters of its outer function , even after the outer
// function has return

function Parent() {
  let counter = 0;
  function child() {
    console.log(++counter);
  }
  return child;
}

const child = Parent();
Parent(); // output - 1
Parent(); // output - 1
child(); // output - 1
child(); // output - 2
// let counter = 0;
// function child1() {
//   console.log(++counter);
// }

// function Parent() {
//   let counter = 5;
//   return child1;
// }

// const returnChild = Parent();
// returnChild();
