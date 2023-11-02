let myDate = new Date()

// object
// console.log(typeof myDate);

// Thu Sep 28 2023 21:48:11 GMT+0000 (Coordinated Universal Time)
// console.log(myDate);

// Thu Sep 28 2023
// console.log(myDate.toDateString());

// 2023-09-28T21:49:22.982Z
// console.log(myDate.toISOString());

// 9/28/2023
// console.log(myDate.toLocaleDateString());

// 9/28/2023, 9:51:41 PM
// console.log(myDate.toLocaleString());

// Mon Jan 23 2023
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// 2/14/2006, 12:00:00 AM
// let myCreatedDate = new Date("02-14-2006")
// console.log(myCreatedDate.toLocaleString());

// 1695938839329
// Milisecond value from 1 Jan 1970
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// 28/9/2023 (IST)
// let newDate = new Date()
// let ist = new Intl.DateTimeFormat('en-IN').format(newDate)
// console.log(ist);

let newDate = new Date()
newDate.toLocaleString('default', {
    weekday: "long"
})
