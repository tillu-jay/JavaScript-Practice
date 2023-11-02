//====> Normal Function
// function sayMyName() {
//     console.log("J");
//     console.log("A");
//     console.log("Y");
// }

//====> Function Reference
// console.log(sayMyName);

//====> Function Calling
// console.log(sayMyName());

//====> Function with Return Type
// function greet(name) {
//     return `Hello ${name}`
// }

// console.log(greet("Jay"));

//====> Function with Return Type
// function greet(name) {
//   return `Hello ${name}`;
// }

// const greetMyName = greet("Jay");

// console.log("From Console: ", greetMyName);

//====> Rest Operator
function calculatePrice(...cartItems) {
  return cartItems;
}

function calculatePrice(...cartItems) {
    return cartItems;
  }

console.log(calculatePrice("Shampoo", "Doll", "Mobile", "Mouse"));
