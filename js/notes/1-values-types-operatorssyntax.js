//for strings
// declarations.
let s = "Oyeee ";
let s2 = 'oyee ';
let s3 = `oyeee`;
console.log(s);
console.log(s2); 
console.log(s3);




//Concatenation of strings,
let s4 = s + s2 + s3;
console.log(s4);





// backtick
console.log(`Aryan's weight is ${100 * 10}N`);

const name = "Chris";
const greeting = `Hello, ${name}!`;
console.log(greeting); //simple variable interpolation
const price = 10;
const VAT = 0.25;
const total = `Total: $${(price * (1 + VAT)).toFixed(2)}`;
console.log(total); // Embedding expressions and calculations
const isActive = true;
const statusMessage = `Status: ${isActive ? "Active" : "Inactive"}`;
console.log(statusMessage);// using conditionals operators.
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

const itemPrice = 50;
const receipt = `You purchased an item for ${formatCurrency(itemPrice)}.`;
console.log(receipt);//calling functions; Output: You purchased an item for $50.00.
const fruits = ["mango", "orange", "pineapple"];
const list = `My favourite fruits are ${fruits}.`;
console.log(list);
// Embedding Arrays; Output: My favourite fruits are mango,orange,pineapple.




console.log(5 + '5'); // Output: "55" (Number 5 is coerced to string "5")
console.log(true + ' is a boolean'); // Output: "true is a boolean" (Boolean true is coerced to string "true")

console.log('10' - 5); // Output: 5 (String "10" is coerced to number 10)
console.log(10 * '5'); // Output: 50 (String "5" is coerced to number 5)
console.log(true + 1); // Output: 2 (Boolean true is coerced to number 1)
console.log(null + 2); // Output: 2 (Null is coerced to number 0)

console.log(5 == '5'); // Output: true (String "5" is coerced to number 5)
console.log(false == 0); // Output: true (Boolean false is coerced to number 0)
console.log(null == undefined); // Output: true (A special rule makes them loosely equal)
console.log('' == 0); // Output: true (Empty string "" is coerced to 0)

if (0) { /* ... */ } else { console.log('0 is falsy'); } // Output: "0 is falsy"
if ('hello') { console.log('String is truthy'); } // Output: "String is truthy"
console.log(!!'hello'); // Output: true (Double negation is a common trick to explicitly coerce to a boolean)

console.log([] + 1); // Output: "1" (Empty array [] is coerced to an empty string "")
console.log([1, 2, 3] + ''); // Output: "1,2,3" (Array is coerced to a comma-separated string)
console.log({} + []); // Output: "[object Object]" (Object is coerced to its default string representation)

