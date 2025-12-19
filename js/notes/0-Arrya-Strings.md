# Arrays:

An Array is an object type designed for storing data collections.

### Characteristics of js Arrays;

- <b>Dynamic Size:</b> Arrays can shrink or grow as elements are added or removed from them.
- <b>Heterogenous: </b>Arrays can contain elements of different data types(numbers, strings, objects and other arrays).

## Declaration of arrays:

1. const array_name = [item1, item2, ...];
2. Using `new Array` key word<br>
   const cars = new Array("Saab", "Volvo", "BMW");

## Accessing Arrays elements:

const cars = ["Saab", "Volvo", "BMW"];<br>
let car = cars[0];

## Changing array elements:

const cars = ["Saab", "Volvo", "BMW"];<br>
cars[0] = "Opel";<br><br><br>
<b>With JavaScript, the full array can be accessed by referring to the array name</b><br>
const cars = ["Saab", "Volvo", "BMW"];<br>
document.getElementById("demo").innerHTML = cars;<br>

## Arrays are Objects:

- If we use typeof operator in js, we get objects for arrays. <br>
  or we can say that Arrays are a special type of Object.
  <br>
- Arrays use numbers to access its "elements".
- Objects use names to access its "members".
- Array elements can be objects too.

# Arrays properties and methods.

1. `arr.length`:

- The length property returns the length (size) of an array
- The length property can also be used to set the length of an array:<br>
  const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
  fruits.length = 2;<br>

2. `arr.toString()`:

- The toString() method returns the elements of an array as a comma separated string.

3. `arr.join()`:

- The join() method also joins all array elements into a string.
  It behaves just like toString(), but in addition you can specify the separator:<br>
  const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
  document.getElementById("demo").innerHTML = fruits.join(" _ ");<br>
  Result: Banana _ Orange _ Apple _ Mango

4. `arr.pop() and arr.push(x)`:

- used for removing the last and element from the array, and the other one is used for adding an element, x, in last.

5. `arr.shift()`:

- The shift() method removes the first array element and "shifts" all other elements to a lower index.<br>
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.shift();<br>
  If we print this fruits.shift(), as console.log(fruits.shift()), then result would be "Banana".

6. `arr.unshift()`:

- The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
  <br>const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
  fruits.unshift("Lemon");<br>
  // "Lemon","Banana", "Orange", "Apple", "Mango"<br>
- The unshift() method returns the new array length:

7. `arr1.concat(arr2)` :

- The concat() method creates a new array by merging (concatenating) existing arrays.
- arr1.concat(arr2, arr3); for merging three elements.
- arr1.concat("Peter"); /// can be used to merging an array with any value.

8. `arr.copyWithin(parameters)` :

- The copyWithin() method copies array elements to another position in an array:
  <b>Examples:</b><br>
  Copy to index 2, all elements from index 0:<br>
  const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
  fruits.copyWithin(2, 0);<br>
  Copy to index 2, the elements from index 0 to 2:<br>
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];<br>
  fruits.copyWithin(2, 0, 2);<br>
- `The copyWithin() method overwrites the existing values.`
- `The copyWithin() method does not add items to the array.`
- `The copyWithin() method does not change the length of the array`

9. <b>Flattening an array:</b><br>

   1. Flattening an array is the process of reducing the dimensionality of an array.
   2. Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
   3. const myArr = [[1,2],[3,4],[5,6]];<br>const newArr = `myArr.flat()`;<br>
      <b>result</b>: 1,2,3,4,5,6
   4. `arr.flatMap()`:<br>

   - The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
   - const myArr = [1, 2, 3, 4, 5, 6];<br>const newArr = myArr.flatMap(x => [x, x * 10]);<br>
     <b>result</b>: 1,10,2,20,3,30,4,40,5,50,6,60

10. <b>Splicing and Slicing Arrays</b><br>The `splice()` method adds new items to an array.<br>
    The `slice()` method slices out a piece of an array.<br> 1. `arr.splice()`: - const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>fruits.splice(2, 0, "Lemon", "Kiwi");
    <br>The `first parameter` (2) defines the position where new elements should be added (spliced in).<br>The `second parameter` (0) defines how many elements should be removed.<br>The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added. - The `splice()` method returns an array with the deleted items:
    <br> let removed= arr.splice(2,2, "Banana", "Apple");<br>
    console.log(removed);<br> - Using this function to remove elements with clever parameter settings,<br>
    const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>fruits.splice(0, 1); // fruits= "Orange", "Apple", "Mango" - The difference between the new `toSpliced()` method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array. 2. The `slice()` method creates a new array.<br>
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];<br>const citrus = fruits.slice(1); - he slice() method can take two arguments like slice(1, 3).<br>The method then selects elements from the start argument, and up to (but not including) the end argument.

## Complete Array Reference:

<b>Name Description</b><br>
<br>`[ ]`---> Creates a new Array
new Array() Creates a new Array
<br>`at()`---> Returns an indexed element of an array
<br>`concat()`---> Joins arrays and returns an array with the joined arrays
constructor Returns the function that created the Array prototype
<br>`copyWithin()`---> Copies array elements within the array, to and from specified positions
<br>`entries()`---> Returns a key/value pair Array Iteration Object
<br>`every()`---> Checks if every element in an array pass a test
<br>`fill()`---> Fill the elements in an array with a static value
<br>`filter()`---> Creates a new array with every element in an array that pass a test
<br>`find()`---> Returns the value of the first element in an array that pass a test
<br>`findIndex()`---> Returns the index of the first element in an array that pass a test
<br>`findLast()`---> Returns the value of the last element in an array that pass a test
<br>`findLastIndex()`---> Returns the index of the last element in an array that pass a test
<br>`flat()`---> Concatenates sub-array elements
<br>`flatMap()`---> Maps all array elements and creates a new flat array
<br>`forEach()`---> Calls a function for each array element
<br>`from()`---> Creates an array from an object
<br>`includes()`---> Check if an array contains the specified element
<br>`indexOf()`---> Search the array for an element and returns its position
<br>`isArray()`---> Checks whether an object is an array
<br>`join()`---> Joins all elements of an array into a string
<br>`keys()`---> Returns a Array Iteration Object, containing the keys of the original array
<br>`lastIndexOf()`---> Search the array for an element, starting at the end, and returns its position
length Sets or returns the number of elements in an array
<br>`map()`---> Creates a new array with the result of calling a function for each array element
<br>`of()`---> Creates an array from a number of arguments
<br>`pop()`---> Removes the last element of an array, and returns that element
prototype Allows you to add properties and methods to an Array object
<br>`push()`---> Adds new elements to the end of an array, and returns the new length
<br>`reduce()`---> Reduce the values of an array to a single value (going left-to-right)
<br>`reduceRight()`---> Reduce the values of an array to a single value (going right-to-left)
<br>`reverse()`---> Reverses the order of the elements in an array
<br>`shift()`---> Removes the first element of an array, and returns that element
<br>`slice()`---> Selects a part of an array, and returns the new array
<br>`some()`---> Checks if any of the elements in an array pass a test
<br>`sort()`---> Sorts the elements of an array
<br>`splice()`---> Adds or Removes array elements
<br>`toReversed()`---> Reverses the order of array elements (to a new array)
<br>`toSorted()`---> Sorts the elements of an array (to a new array)
<br>`toSpliced()`--->Adds or Removes array elements (to a new array)
<br>`toString()`---> Converts an array to a string, and returns the result
<br>`unshift()`---> Adds new elements to the beginning of an array, and returns the new length
<br>`valueOf()`---> Returns the primitive value of an array
<br>`with()`---> Returns a new array with updated elements
