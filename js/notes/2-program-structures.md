# Program Sturcture

## Bindings

- To catch and hold values, JavaScript provides a thing called a binding, or variable.
- `let`, `var` and `const`.

## Binding Names

- A binding name may include dollar signs ($) or underscores (\_) but no other punctuation or special characters.

## Loops

- Its the same as in anyother language and the syntax is also same as in C/C++.
- `For loop`:<br>
  for(let i=0;i<n;i++){<br>
  //code to be executed <br>
  }<br>
- `While`:<br>
  while(condition){<br>
  code to be executed<br>
  }
- `do while`:<br>
  do{<br>
  //code to be executed <br>
  }<br><br>
  <b>`You can find the length of a string by writing .length after it.`</b><br>
  let abc = "abc";<br>
  console.log(abc.length);<br>
  // → 3<br><br>

### Questions:

1. Write a loop that makes seven calls to console.log to output the following triangle:<br> #<br> ##<br> ###<br> ####<br> #####<br> ######<br>
   #######<br> (find answers in the code file.)
2. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
3. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard. Passing this string to console.log should show something like this:<br>
   ㅤ \# # # #<br>
   \# # # #<br>
   ㅤ \# # # #<br>
   \# # # #<br>
   ㅤ \# # # #<br>
   \# # # #<br>
   ㅤ \# # # #<br>
   \# # # #<br> When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
