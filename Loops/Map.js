// Map Stores Data in Key Value Pairs
// All Values Inside Map are Unique

const myMap = new Map();

myMap.set("BH", "Bharat");
myMap.set("US", "USA");
myMap.set("FR", "France");
myMap.set("SL", "Shri Lanka");

// console.log(myMap);

// Direct Access
for (const value of myMap) {
  console.log(value);
}

// Access values through Array Destructure
for (const [key, value] of myMap) {
  console.log(`${key} - ${value}`);
}
