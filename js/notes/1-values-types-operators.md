# 1- Values, Types and Operators

## Values

- A value is a piece of data that can be stored in a variable, passed to a function, or otherwise manipulated by your program. All data in a computer is fundamentally stored as sequences of bits (zeros and ones), and in a JavaScript environment, these chunks of data are organized into distinct categories called types, which determine their role and behavior within the language.

## Special Numbers

- There are `three special` numbers in Js. <br>
  First two are `Infinity` and `-Infinity`.<br> The next one is `NaN`(Not a Number.)<br>
  You’ll get this result when you, for example, try to calculate 0 / 0 (zero divided
  by zero), Infinity- Infinity, or any number of other numeric operations that
  don’t yield a meaningful result.

## String

- Strings are used to represent text.<br>
- How do we access/initialise a string?? <br>
  By `single, double quotes and Backticks`.<br>
  For e.g., "oyeee", 'oyee', \`oyee`.<br>
- \+ Operator concatenates two strings together.
- `why use backticks then?`
  <br>
  Backtick-quoted strings, usually called `template literals`, can do a few more
  tricks. Apart from being able to span lines, they can also embed other values.
  `Aryan weight is ${100\*10}<br>

## Unary Operators

- `typeof` and `-`(- is also a binary operator).<br> console.log(typeof 4.5)<br>
  // → number<br>
  console.log(typeof "x")<br>
  // → string<br>

## Boolean Values

- Js has just two values- `False` and `true`.
- used in comparison and yes and no situations.

### There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).

console.log(Nan==Nan);<br>
//false

## Logical Operators

- same as you might have read in C/C++.
- Or ||, and &&, Not !;

## Empty Values

- `Null` and `Undefined`.
- Null yaani uske andar koi value nhi h.
- Undefined yaani baad mein dekhenge (Will see later)

## Automatic type conversion.

- When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect. This is called `type coercion.`<br><b> An important use of '====' instead of '=='.</b><br>console.log(null == undefined);<br>
  // → true<br>
  console.log(null == 0);
  // → false<br>Expressions like 0 == false and "" == false are also true because
  of automatic type conversion. When you do not want any type conversions
  to happen, there are two additional operators: === and !==. The first tests
  whether a value is precisely equal to the other, and the second tests whether it
  is not precisely equal. So "" === false is false as expected.

## an important working of logical operators.

- `The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise.` This has the expected effect when the values are Boolean and does something analogous for values of other types
- The `&& `operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right.
- Another important property of these two operators is that the part to their right is evaluated only when necessary. In the case of true || X, no matter what X is—even if it’s a piece of program that does something terrible—the result will be true, and X is never evaluated. The same goes for false && X, which is false and will ignore X. This is called short-circuit evaluation.
