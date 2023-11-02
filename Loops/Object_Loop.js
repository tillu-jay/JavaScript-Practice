const myObj = {
  js: "Javascript",
  cpp: "C ++",
  rb: "Ruby",
  py: "Python",
};

for (const key in myObj) {
  console.log(`${key} is for ${myObj[key]}`);
}
