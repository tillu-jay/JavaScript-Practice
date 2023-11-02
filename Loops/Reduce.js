// const numbers = [1, 2, 3];

// const total = numbers.reduce((previousValue, currentValue) => {
//   console.log(`Old Value:- ${previousValue} & Current Value:- ${currentValue}`);
//   return previousValue + currentValue;
// }, 0);

// console.log(`Total Value - ${total}`);

const userCart = [
  {
    courseName: "JavaScript Course",
    price: 1999,
  },
  {
    courseName: "Python Course",
    price: 999,
  },
  {
    courseName: "Java Course",
    price: 499,
  },

  {
    courseName: "Data Science Course",
    price: 12999,
  },
  {
    courseName: "Flutter Course",
    price: 9599,
  },
];

const priceToPay = userCart.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);

console.log(priceToPay);