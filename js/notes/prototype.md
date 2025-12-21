### Prototype, **proto** and Polyfills

## Prototype:

- ### What is Prototype?

  - It is a blueprint or master object that other objects can inherit properties and methods from, creating a "chain" of inheritance; when you look for something in an object and don't find it, JavaScript automatically checks its prototype, then its prototype's prototype, and so on, until it finds it or hits the end of the chain, allowing shared functionality without duplicating code.

- ### What is the need of prototype in JS?? :\
  - Look at this example., if i make an object like this<br>
    function Person(name) {<br> this.name = name;<br> this.sayHello = function () {<br> console.log("Hello " + this.name);<br> };<br>}<br>
    So, what's the problem here?/ 🤔🤔<br>
    - if we call Person(), each time sayHello() will be created--> MEMORY WASTAGE<br>
      So instead of this, JS has a common place where this things are stored and that place is ---> `Prototype`<br>
  - So how we use prototype? A way of using it is:<br>
    function Person(name) {<br> this.name = name;<br>Person.prototype.sayHello = function () {<br> console.log("Hello " + this.name);<br>};<br><br>
    <b>name</b> → har object ka apna<br><b>sayHello</b> → shared<br> <b>Prototype</b> = shared object for methods<br>
- ### Internally kya hota h???
  <br> let p= new Person("Aryan");
  - here's what js does:
    1. Creates an empty Object { }
    2. Uska `__proto__` set karta h-->> Person.prototype
    3. Constructor call karta h.
  - p1--> **proto** → Person.prototype

## **proto**:

- ### ye Kya h?
  - Object's internal Pointer
  - Points to the object's prototype<br><br>
    p1.**proto** === Person.prototype // true
- ### Difference kya h prototype and proto mein??
  - 🔹 prototype
    - Sirf constructor functions ke paas hota hai
    - Used to define what objects will inherit
  - 🔹 **proto**
    - Har object ke paas hota hai
    - Ye link hota hai prototype ki taraf
  - <b>Basically, prototype tells what to inherit, and proto tells from whom to inherit.</b>

## INHERITANCE AND THE PROTOTYPE CHIAN

- Inheritance refers to `passing down characterisitcs from a parent to a child` so that a new peice of code can reuse and build upon the features of an existing one.
- JS implements inheritance by using objects. `Each object has an internal link to another object called its prototype`.
- <b>Prototype Chain</b>: This prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.`Null` has no prototype and acts as the final link in this chain.
  /_ more to be learn in this_/.

## Polyfill:

- Manual implementation of a feature that JS engine / browser should have provided.
- <b>Use Case:</b>Old browser, Interview, Deep Js Understanding.
- for e.g., Arr.prototype.map is not present in browser, then we have to made on our own.
- Arrow function should not be used,<br>we must use this declaration<br>
  `Array.prototype.myMap = function () { }`

- Existing method should not be overwritten.
- correct pattern: <br>if (!Array.prototype.myMethod) {<br> Array.prototype.myMethod = function () {<br> // logic<br> };<br>}<br>
- Polyfill function --> `This` = object jisne call kiya.
- we need to mutate original array
- ### Thinking process of making `Polyfill`

  - Har array method ke liye ye sochona h-

  1.  Return kya karta hai?
  2.  original array change hota hai?
  3.  Callback ka role kya hain?
  4.  Loop kaise chalta hai?
  5.  `this` kya represent karega.

- ### Practice Checklist
  1.  map
  2.  filter
  3.  reduce
  4.  forEach
  5.  includes
  6.  bind
