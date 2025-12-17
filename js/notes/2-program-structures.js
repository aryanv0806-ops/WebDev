//1st.
let t = "#";
for (let i = 0; i < 7; i++){
    console.log(t);//console.log has built in \n
    t = t + "#";
}
//2nd.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//3rd
let g = "";

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0) {
      g += " ";
    } else {
      g += "#";
    }
  }
  g += "\n";
}

console.log(g);
