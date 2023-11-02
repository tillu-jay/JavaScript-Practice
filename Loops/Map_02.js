const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = numbers.map((item) => {
//   return item + 10;
// });

// console.log(newNums);

//===> Chaining
// You can do as much chaining as you want.
// In Chaining App Passes the last operation values as array to the next element

const newNums = numbers
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((item) => item >= 40);

console.log(newNums);
