const course = {
  name: "js course",
  price: 500,
};

// General way of accessing Object Values
// console.log(course.name);

// Direct Access
const { price } = course;

// Named Access
const { price: coursePrice } = course;

console.log(coursePrice);
