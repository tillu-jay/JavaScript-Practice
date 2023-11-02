/**
 * There are two ways to define Object in JS:
 * 1. Singleton - Created from Constructor (Object.Create())
 * 2. Literal - Normal Object (let obj = {})
 * No Performance Changes are there between both.
 *
 * In JavaScript, objects are collections of key-value pairs, and keys can be of various types:
 * 1. String Keys: The most common type, enclosed in single, double quotes, or backticks.
 * 2. Numeric Keys: Numeric keys are automatically converted to strings.
 * 3. Symbol Keys: Symbols are unique and used for special purposes, like private properties.
 * 4. Computed Property Keys: You can compute keys dynamically using square brackets.
 * 5. Variable Keys: Variables can be used as keys for defining or accessing properties.
 * 6. Reserved Words as Keys: Reserved words can be used as keys when enclosed in quotes.
 * 7. Getter and Setter Methods: Keys can also be getter and setter methods for object properties.
 *
 * String keys are the most commonly used, while other types like symbols are used
 * for specific purposes like creating private properties.
 */

// const mySymbol = Symbol("key1");

// // Object Literal
// const user = {
//   name: "Jay",
//     // mySymbol: "Symbol Value",  ==> Wrong Way of Referencing Symbol as Key
//   [mySymbol]: "Symbol from Obj",
//   "Company Name": "Samrajya Inc",
//   age: 18,
//   email: "jay@google.com",
//   isLoggedIn: true,
//   lastLoginDays: ["Monday", "Tuesday"],
// };

//=====> Accessing the Object Method 1
//=============================================================
// console.log(user.name);

//=====> Accessing the Object Method 2
//=====> If Keys are containing white spaces. We have to use this way
//=====> If Symbols are used as keys. We have to use this way
//=============================================================
// console.log(user["Company Name"]);
// console.log(user[mySymbol]);

//=====> Object.freeze()
//=====> This will freeze the Object. No one can change its values now.
//=====> If we try to change no error will occur but Object will not update.
//=============================================================
// user.email = "jay@samrajya.com";
// Object.freeze(user);
// user.email = "jay@microsoft.com"
// console.log(user);

//=====> Object with Function 1
//=====================================================
// user.greeting = function () {
//   console.log("Hello World");
// };
// user.greeting()

//=====> Accessing Key from same Object using "this"
//=====> If you want to access the values of same object we use "this" keyword for that
//=====================================================
// user.greeting = function () {
//   console.log(`Hello ${this.name}`);
// };
// user.greeting()

// Object Literal Definition

//===================================================
//=====> Concatenate two or more Objects0
// const obj1 = {
//   1: "one",
//   2: "one",
// };

// const obj2 = {
//   3: "three",
//   4: "four",
// };

// const obj4 = Object.assign(obj1, obj2);   Also Valid Syntex but not recommanded
// const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = { ...obj1, obj2 }; Recommeded Way
// console.log(obj3);

//===================================================
//=====> Nested Objects and how to access them
// const myObj = {
//   name: "Jay",
//   id: "123",
//   data: {
//     username: "Jay_Tillu",
//     password: "1234",
//     loginDetails: {
//       loginCount: 4,
//       loginLocation: "Vadodara",
//     },
//   },
// };

// console.log(myObj.data.loginDetails.loginLocation);

//===================================================

//==========> Array of Objects. Mostly used in DB Operations 
// const data = [
//   {
//     id: 1,
//     email: "j@mail.com",
//   },
//   {
//     id: 2,
//     email: "j@mail.com",
//   },
//   {
//     id: 1,
//     email: "j@mail.com",
//   },
//   {
//     id: 1,
//     email: "j@mail.com",
//   },
//   {
//     id: 1,
//     email: "j@mail.com",
//   },
// ];

//=========> Extra Utility Functions in Objects
const myObj = {
  name: "Jay",
  id: "123",
  data: {
    username: "Jay_Tillu",
    password: "1234",
    loginDetails: {
      loginCount: 4,
      loginLocation: "Vadodara",
    },
  },
};

// Will Return the keys in the form of Array
// console.log(Object.keys(myObj));

// Will Return the values in the form of Array
// console.log(Object.values(myObj));

// Will Return the Each Entry of Object in the form of Array. 
// Here Every Object Entry is also an Array. 
// console.log(Object.entries(myObj));

// Will Return Boolean Result whether the object has given key or not.
// Works only for Keys. (Values and Nested Object keys will not work)
console.log(myObj.hasOwnProperty('Jay'));
