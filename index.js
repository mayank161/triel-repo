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

console.log(array.indexOf(6) + array.includes(1));
array.pop();
array.pop();
// Math.min And Math.max
let min = Number.MAX_VALUE, max = Number.MIN_VALUE;
for(let i=0; i<array.length; i++) {
    min = Math.min(min,array[i]);
    max = Math.max(max,array[i]);
}
console.log(`min value = ${min} and max value = ${max}`);

// destruction in array
//we can destruct our constructed array by
let fruit = ["orange","banana","apple"];
let number = [1,2,3,4,5,6,7,8,9];

const [a,b,c] = fruit; // it will store values of array in increment index
console.log(a,b,c) //cannot put d because size of fruit = 3

const [d,,e,...rest] = number // (,,) will skip the element and (...) will save the rest array in rest
console.log(d,e,rest)

// objects in javascript

const person = {
    NAME: "Mayank",
    AGE: 22,
    GENDER: "MALE",
    ADDRESS: {     // nested objects
        zone: 4,
        area: 144,
        place: "DELHI"
    }
}

// destruction in objects
person.ADDRESS.zone //it can also be written as down below
const {NAME,AGE,ADDRESS: {zone}} = person; // can call nested object with key
console.log(NAME,AGE,zone)

// creating default value inside destruction of class person

const{country = "INDIA"} = person  // science country is not present so it will add on
console.log(country)

// some task with objects

const PERSON = {
    ID: 141,
    Age: 22,
    hobbies: ["movies","sports","coding"],
    Address: {
        block: 32,
        area: "gtb nagar",
        state: "DELHI"
    } 
}
console.log("one hobby = ",PERSON.hobbies[0])
console.log(PERSON.Address.state)

const{Age, Address:{state}} = PERSON
console.log("age = "+Age, "state = "+state)

//object looping

const detail = [
    {
        id: 1,
        value: 5
    },
    {
        id: 2,
        value: 10
    },
    {
        id: 3,
        value: 15
    },
]

for(let i=0; i<detail.length; i++) {
    console.log(detail[i].id)
}