# Properties (objects) and its methods:

## 1. Local Storage:
   - Persistence: Data stays as long as one manually deletes it or removes it from the code or clear it.
   - Stores only in strings format UTF-16, if we need objects or arrays then we have to convert it into JSON string.
   - <b> Synchronous:</b> this runs on main thread, that is why for saving big data Ui can feel laggy.

   ### Methods:
   - <b>localStorage.setItem('key', 'value'):</b> for saving data.
   - <b> localStorage.getItem('key'):</b> data nikalne ke liye
   - <b>.removeItem('key'):</b> deleting a specific data
   - <b>.clear():</b> Emptying the whole local storage.
   ### for objects and arrays:
   - use JSON.stringify() and JSON.parse().
   - <b>Example:</b><br>
   const user= {name:"Aryan", college:"IIITN"};<br>
   localStorage.setItem('userProfile', JSON.stringify(user));<br>
   <br>
   const savedData= JSON.parse(localStorage.getItem('userProfile'));<br>
   console.log(savedData.name);//Output:Aryan<br>
   ### Security and Limitations
   - Sensitive Data: koi bhi js code padhke ke local storage se sensitive data dekh sakta h.

## 2. Event Bubbling:
- 