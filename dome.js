// dom is document object which is used to add js on html tags
// it takes id from the tags and perform the operation on them like local storage

// you can select element from tags in js by two ways
//one way -> single element selectors and multiple element selector

// single element selector
console.log(document.getElementById('made')); // it will take the things inside that id

console.log(document.querySelector('h1'))// query is jquery which can take anything eg - (tag,id ,class, etc) if multiple then take the first

// multiple element selector
console.log(document.querySelectorAll('.first')); // jquery is best to take values because we donot have to define anything

console.log(document.getElementsByClassName('.first'));

const first = document.querySelector('.first');
first.innerHTML = '<li style="color: green;"> HELLO </li> <br>';

const second = document.getElementById('made');
second.style.color = 'yellow';
