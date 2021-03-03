let topic = "you had opened the console";
console.log(topic);

// swapping two numbers without taking new variable

let num1 = 10;
let num2 = 20;

console.log("num1 = " + num1 + " & num2 = " + num2);

num1 += num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("num1 = " + num1 + " & num2 = " + num2);

// operations on string in javaScript.

let name = "Mayank";
let age = 22;
let address = "keshav nagar : Delhi";

const personalDetails = `My name is ${name}, age is ${age}, address is ${address}`;
console.log(personalDetails);
// we can split the string into array by stringName.split("from where to split");
console.log(personalDetails.split(", "));

// Arrays in javaScript

let array = [1,2,3,5];
// storing an array at any position,[5] contains empty
array[4] = 6;
array[6] = 7;
array.push(8);// add element at last
array.unshift(0); // add element at start
array.pop();
console.log(array);

console.log(array.indexOf(6));