// Ways to Declare Array
const myArray = [
  "Bharat",
  "Japan",
  "America",
  "Russia",
  "Australia",
  "China",
  "Sri Lanka",
];
// const myArray02 = new Array(1, 3, 4, 5, 6);
// console.log(myArray.length);

//**************** Array Methods ***************/

//=====> Push Method
//=====> Adds given elements into array.
//=====> Modifies Original Array
//===============================================
// myArray.push("America", "China");
// console.log(myArray);

//=====> Pop Method
//=====> Removes last element from array.
//=====> Modifies Original Array
//===============================================
// myArray.pop()
// console.log(myArray);

//=====> Unshift Method
//=====> Adds element at starting of array.
//=====> Modifies Original Array
//===============================================
// myArray.unshift(10, 12)
// console.log(myArray);

//=====> Shift Method
//=====> Removes first element from starting of array.
//=====> Modifies Original Array
//===============================================
// myArray.shift()
// console.log(myArray);

//=====> Includes Method
//=====> Tells whether given element exists in the array or not. Returned Boolean
//===============================================
// console.log(myArray.includes("Canada"));

//=====> IndexOf Method
//=====> Returned the Index of given element. Returned (-1) if element doesn't exist
//===============================================
// console.log(myArray.indexOf("America"));

//=====> Join Method
//=====> Converts Array into String. Elements are separated by given Seprator.
//=====> DOES NOT Modifies Original Array
//===============================================
// const JoinedArray = myArray.join()
// console.log(myArray);
// console.log(JoinedArray);
// console.log(typeof myArray);
// console.log(typeof JoinedArray);

//=====> Slice Method
//=====> Gives copy of elements from an Array. Takes Starting Index (Inclusive)
//=====> and Ending Index (Exclusive).
//=====> DOES NOT Modifies Original Array
//===============================================
// const slicedArray = myArray.slice(0, 3)
// console.log(slicedArray);
// console.log(myArray.slice(7, 10));

//=====> Splice Method
//=====> Removes Elements From an Array and if specified inserts
//=====> new elements in their place. Returns the deleted elements.
//=====> Modifies Original Array
//===============================================
// myArray.splice(0, 2)
// const newArray = myArray.splice(0, 3, "Samsung", "Apple", "Realme", "Oppo", "Vivo")
// console.log(newArray);
// console.log(myArray);

//=====> Concat Method
//=====> Combines two or more arrays.
//=====> This method returns a new array without modifying any existing arrays.
//=====> DOES NOT Modifies Original Array
//===============================================
// const phoneNames = ["iPhone", "Vivo", "Oppo"]
// const concatenatedArray = myArray.concat(phoneNames)
// console.log(concatenatedArray);
// console.log(myArray);
// console.log(phoneNames);

//=====> Flat Method
//=====> Returns a new array with all sub-array elements concatenated into it.
//=====> Here depth parameter specifies how deep Javascript should hunt for arrays.
//=====> DOES NOT Modifies Original Array
//===============================================
// const mixArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12, 13, 14]]];
// mixArray.flat(1);
// console.log(mixArray);

//=====> Array.of Method
//=====> Returns a new array from a set of elements.
//===============================================
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3));

//=====> Array.from Method
//=====> Creates an array from an iterable object.
//===============================================
// console.log(Array.from("Jay"));

//=====> Array.isArray Method
//=====> The isArray() method returns true if an object is an array, otherwise false.
//=====> Array.isArray() is a static property of the JavaScript Array object.
//===============================================
// console.log(Array.isArray(myArray));
