  // giving btn to add js to the class .btn
  const btn = document.querySelector('.btn');

// adding functionality to that btn

btn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  document.querySelector('body').classList.add('bg-dark'); // add bg dark functionality
});

btn.addEventListener('mouseout', (e) => {
  e.preventDefault();
  document.querySelector('#my-form').style.background = 'green'; 
});

// grabbing the values

const myForm = document.querySelector('#my-form');
const Name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const user = document.querySelector('#users');
// add event listener on click the button of id = submit
myForm.addEventListener('submit', onSubmit);

// function run onSubmit
function onSubmit(e) {
  e.preventDefault();
  if(Name.value === '' || email.value === '') { // if any value is empty then it run
    msg.classList.add('error'); // it will add the class of error
    setTimeout(() => msg.remove(),3000); // it will remove msg at given time
    msg.innerHTML = 'please enter the all field' // that will add the html on it
  }
  else {
    const li = document.createElement('li'); // it will create type of element
    li.appendChild(document.createTextNode(`${Name.value} : ${email.value}`)); // append text

    user.appendChild(li);

    //clear field
    Name.value = '';
    email.value = '';
  }
}
