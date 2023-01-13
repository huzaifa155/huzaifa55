// console.log("javascript working")

// function information(name, age, greetText){
//     // let temp = `${greetText} ${name} is a good boy you are ${age} years old`;
// console.log(`${greetText} ${name} is a good boy you are ${age} years old`);
// }

// // function sum(a, b, c, d){
// //     let f = a + b + c + d;
// //     return f;

// // }

// // let returnVal = sum(1, 2, 3, 4);
// // console.log(returnVal);

// let name = "Huzaifa";
// let age = 18;
// let name1 =  "Haris";
// let age1 = 22;
// let name2 =  "Hasan";
// let age2 = 20;
// let name3 =  "Hassan";
// let age3 = 15;
// let greetText1 = "Good Morning";

// information(name, age, greetText1);
// information(name1, age1, greetText1);
// information(name2, age2, greetText1);
// information(name3, age3, greetText1);
// information();


// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");


// function myIntro(name, age4) {
//   console.log(`Hi! my name is ${name} I am ${age4} years old`);
//   console.log(name, age4);
// }

// let stdN = "Hi! My name is Huzaifa"
// // let age = "I am 18 years old";
// let stdD = "Hi! my name is Huzaifa Altaf";
// let name4 = "huzaifa";
// let age4 = 18;
// myIntro(name, age4);

// function stdD(name, age, greeting) {
//   console.log(`${greeting} My name is ${name} I am ${age} Years Old`);
// }

// let name = "Haris";
//   let age = 22;
//   let name1 = "Hasan";
//   let age1 = 20;
//   let name2 = "Huzaifa" ;
//   let age2 = 18; 
//   let name3 = "Raza";
//   let age3 = 17;
//   let name4 = "Hasan";
//   let age4 = 15;
//   let greeting = "Hello";

// stdD(name, age, greeting);
// stdD(name1, age1, greeting);
// stdD(name2, age2, greeting);
// stdD(name3, age3, greeting);
// stdD(name4, age4, greeting);

// function stdD(a) {
//     let name = "Hello! My name is " + a;
//     return name;
// }
// let name1 = "Huzaifa";
// console.log(stdD(name1));

let testExmaple = function() {
  let name = `Hello! My name is ${name2}`;
      // return name;
      console.log(name);
}
let name2 = "huzaifa";
testExmaple()
// console.log(name2.toUpperCase());

function testExmaple1(name, age, greeting) {
  console.log(`Hello ${greeting} My name is ${name} I am ${age} Years Old`)
}

let name = "Huzaifa";
// name = "hasan";
let age = 18;
let greeting = "Good Morning";

testExmaple1(name, age, greeting);

let leng = name.length;
console.log(leng)
console.log(greeting.length)

let position = name.lastIndexOf('a')
console.log(position)

// let position = name.substr(1,4)
// console.log(position)

// let position = name.replace('zai', 'fau')
// console.log(position)

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

let myVal = [1, 2, 3, "Huzaifa", "hasan"];
console.log(myVal)

let myVal1 = new Array(1, 22, 3, "Huzaifa");
// myVal.sort();
console.log(myVal1)