const languageArray = ["Javascript", "Python", "Dart", "Ruby on Rails"];

// languageArray.forEach((item) => {
//     console.log(item);
// });

// languageArray.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

const languageObject = [
  {
    languageName: "Javascript",
    fileName: ".js",
  },
  {
    languageName: "Python",
    fileName: ".py",
  },
  {
    languageName: "C++",
    fileName: ".cpp",
  },
];

languageObject.forEach((item) => {
    console.log(item.fileName);
});
