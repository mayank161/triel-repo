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
//for each loop in javascript
detail.forEach(function(val) {
    console.log(val.value)
})
// use of map is to create a new array with existing ones

const createdArray = detail.map(function(val){
    return val.id
}) 
console.log(createdArray)

// functions in js
function addNums(num1 = 1,num2 = 1) { // we save 1 as a default so if nothing pass print default
    console.log(num1 + num2)
    return num1 + num2
}
//we can return through same function
console.log(addNums(5,5))

// we can also write above function as
const addnums = (num1 = 1,num2 = 1) => {
    return num1 + num2
}
console.log(addnums(15,15))

// or by more optimize we don not have to write return and write in one line
const newsum = (num1 = 1,num2= 1) => num1 + num2
console.log(newsum(20,20))

// some example of functions
// Write a function to take temperature in degree celcius and return in degree kelvin

const celciusToKelvin = (temp = 0) => temp + 273

console.log(`35 celcius is = ${celciusToKelvin(35)} kelvin`)

const convertTemp = (temp , convert) => (convert == 'K') ? temp + 273: temp - 273

console.log(`40 celcius into kelvin = ${ convertTemp(40,'K') }`)

console.log(`308 kelvin into celcius = ${ convertTemp(308,'C') }`)


//Functional Contructors in javascript

function student(fname, rollNo, gender, dob) {
    this.fname = fname;
    this.rollNo = rollNo;
    this.gender = gender;
    this.dob = new Date(dob);
    this.age = Math.round(Date.now(dob)/(365*30*24*60*60*80));
    this.getBirthYear = () => this.dob.getFullYear();
    this.fullName = () => `${this.fname} ${this.lastName}`
}

student1 = new student('Jay',  99, 'male' , 22-06-1999);
student2 = new student('Vijay', 55, 'male', 12-08-1997);
student1.lastName = 'agni';
student2.lastName = 'stnam';
if(student1.age < student2.age ) { console.log(student2.fname , student2.lastName) }
else { console.log(student1.fname + student1.lastName)}
console.log(student1.getBirthYear())
console.log(student2.fullName())

function minage(age) {
    if(age<18) { console.log('not eligible') }
    else { console.log('is eligible') }
}
minage(student2.age)

//ES6 classes in javaScript (convert function into classes)

class Student {
    constructor(fname, rollNo, gender, dob) {
        this.fname = fname;
        this.rollNo = rollNo;
        this.gender = gender;
        this.dob = new Date(dob);

        getBirthYear = () => this.dob.getFullYear();

        fullName = () => `${this.fname} ${this.lastName}`
    }
}
student3 = new student('Ray',  69, 'male' , 25-05-1998);
console.log(student3.fname)

// local storage in java script
//it stores some element inside the browser so we can get it
// methids in local storage

localStorage.setItem('name', 'gamer');

localStorage.clear(); //clear the local storage
localStorage.setItem('name2', '2gamer');
localStorage.setItem('name3', '3gamer');
localStorage.removeItem('name3'); // remove particular item.

console.log("value of name2 in local storage is ",localStorage.getItem('name2'));

// local storage cannot take array
//so to overcome it we have to use jason

let larray = ['webdev','machine','dataScience'];

//we cannot put the array in local storage so first we have to convert it into string and then store

localStorage.setItem('Branch', JSON.stringify(larray)); 
//JASON.stringify convert array into string so it look like array but work like string
//after that by using JASON.parse() we can convert it into array again
console.log("that is string converted to array by JASON.parse is ", JSON.parse(localStorage.getItem('Branch')));
