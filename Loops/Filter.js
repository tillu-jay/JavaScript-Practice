//=====> For Each Doesn't Return Any Values
// const coding = ["js", "python", "CPP", "Java"];
// let data = coding.forEach((item) => {
//     console.log(item);
// });
// console.log(data);

//=====> Filter Using ForEach
// const myNums02 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = [];

// myNums02.forEach((item) => {
//   if (item > 4) {
//     newNums.push(item);
//   }
// });

// console.log(newNums);

//=====> Filter Inbuilt Method
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let data = myNums.filter((item) => {
//   return item > 4;
// });

// console.log(data);

const books = [
  {
    title: "Book One",
    genre: "History",
    publish: 1981,
    edition: 1985,
  },
  {
    title: "Book Two",
    genre: "History",
    publish: 1985,
    edition: 1987,
  },
  {
    title: "Book Three",
    genre: "Non-Fiction",
    publish: 1997,
    edition: 2012,
  },
  {
    title: "Book Four",
    genre: "Science",
    publish: 1998,
    edition: 2011,
  },
  {
    title: "Book Five",
    genre: "Fiction",
    publish: 1995,
    edition: 2014,
  },
  {
    title: "Book Six",
    genre: "Science",
    publish: 2001,
    edition: 2012,
  },
  {
    title: "Book Seven",
    genre: "Fiction",
    publish: 1998,
    edition: 2011,
  },
];

const filteredBooks = books.filter((item) => {
    return item.edition > 2001
});

console.log(filteredBooks);