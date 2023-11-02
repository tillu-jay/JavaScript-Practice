// Immediatly Invocked Function Expression
// We use IIFE to prevent Global scope polution and invoke function immediatly


// Named IIFE
// If you don't put semicolon Context won't know where the function is finishing.
// So in case of IIFE its a good practice to put semicolon everytime

(function greet() {
  console.log("Hello Jay");
})();

((name) => {
  console.log(`Hello ${name}`);
})("Akshay");
