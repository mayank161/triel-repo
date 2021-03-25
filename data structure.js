// some data structure in js
// sorting by user command in js

// comparators in js
var ar = [9,5,8,100]; // if sort  then sort in acceding order based on character code

ar.sort();
console.log(ar); // 100 comes first due to list character code
ar.forEach((num) => {
    console.log(num,String(num).charCodeAt(0));
});

// so we can use comparators in js to sort according to us
ar.sort((a,b) => {
    if(a<b) { return -1; } // -1 implies a<b so give false to swap
    else if(a>b) { return 1; } // 1 true swap
    else { return 0; }
});
console.log(ar); // now it sorted in real ascending order

// we can also write our comparator in short way
ar = [8,4,9,10,7];

ar.sort((a,b) => a - b); // it will return a - b;
console.log(ar);

/* lets look how it work 
 for above
 if a = 8, b = 10 so  =>  a-b = 8 - 10 = -2  which is -ve gives false to swap

 if a = 10 , b = 8 so  =>  a-b = 10 - 8 = 2  which is +ve gives true to swap

 0 also gives false because greater then 1 is true;
*/

// we can use b - a for sort in descending order

// now take a look how comparator work on objects

const stuDetail = [
    {name: 'Jay', age: 25},
    {name: 'Vijay', age: 24},
    {name: 'Rahul Chand', age: 36},
    {name: 'sk', age: 26}
];

const sortByNameLength = stuDetail.sort((a,b) => { // it sort by name length
    return a.name.length - b.name.length;
});
console.log(sortByNameLength);

const comparator = (a,b) => a.age - b.age; // sort based on age
// note comparator function must written before call
const sortByAge = stuDetail.sort(comparator);

console.log(sortByAge);

