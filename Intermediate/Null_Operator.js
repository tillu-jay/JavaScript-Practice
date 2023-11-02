// Nullish Coalesing Opearator (??): null undefined
// The Nullish Coalescing Operator, denoted as ??, is a JavaScript operator
// introduced in ECMAScript 2020 (ES11/ES2020) to provide a concise way to
// handle default values for potentially null or undefined values.
// It allows you to check if a value is null or undefined and, if so, provide a default value.

let value;

// value = 5 ?? 10;
// value = null ?? 10;
// value = undefined ?? 15;
value = null ?? 210 ?? 45; // Will Assign the first default value

console.log(value);
