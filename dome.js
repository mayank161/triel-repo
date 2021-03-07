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


//date object in javascript
let today = new Date('12-06-2015'); // it will give it todays date by default
today.getTime(); // to get time in millisecond
console.log(today.getTime());
// set and get the month
today.setMonth(1);
today.getMonth();

// classes and inheritance in javascript
let count = 0;
class USER {
    constructor(username,email,password) {
        this.username = username;
        this.email = email;
        this.password = password;
        count++;
    }
    // for user only
    static registeredUsers() {
        console.log('number of registered user are',count);
    }
    // confirmation
    register() {
        console.log(this.username + " is now registered");
    }
}
 const one = new USER('jay','jay@123','1234');
 const two = new USER('ja','jy@123','134');
 one.register();
 
 USER.registeredUsers();
 let members = 0, date = new Date();
 class member extends USER {
     constructor(username,email,password,startdate,Enddate,memberType,memberShipType) {
         super(username,email,password);
         this.startdate = new Date(startdate);
         this.Enddate = new Date(Enddate);
         this.memberType = memberType;
         this.memberShipType = memberShipType;
         
         // check for member ship is valid or not (if end date is not today)
         if(this.Enddate.getTime() >= date.getTime()) {  members++; }

         // giving extra month to the new member
         if(memberType == 'new') { 
             this.Enddate.setMonth(this.Enddate.getMonth() + 1);
             console.log('congratulations you have got one month of free trial now your endDate=',this.Enddate);
         }
     }

      // creating static for class use only(can not inherit)
     static numMember() { console.log('number of members are',members); }
      
      // renew member ship according to member ship type.
     renewMembership() {
         if(this.memberShipType == 'yearly') { this.Enddate.setMonth(this.Enddate.getMonth() + 12); }
         else { this.Enddate.setMonth(this.Enddate.getMonth() + 1); }
     }
 }

 // giving membership.
 const member1 = new member('Arpit','arpit12@gmail.com','1257','07-01-2021','10-05-2021','old','yearly');
 const member2 = new member('Rahul','rahul16@gmail.com','7845',new Date(),'08-06-2021','new','standard');

 // renew member ship by one month(because Standard).
 member2.renewMembership();
 console.log(member2.Enddate);

 //returning total number of members.
 member.numMember();