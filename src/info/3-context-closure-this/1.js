// remember
function User(name) {
  //this = {} implicitly
  this._name = name;
}

// for function THIS it is the same object
let banana = {
  color: 'yellow',
  grow() {
    console.log(this.color) // yellow - reference to banana itself
  }
}

// THIS is not fixed
let user = {
  name: 'sam',
  green() {
    console.log(user.name)
  }
}
user.green() // sam
admin = user
user = null
admin.green() // ERROR: Cannot read property 'name' of null

// You can share this between functions
let user = { name: "john" };
let admin = { name: "admin" };

function sayHi() {
  alert( this.name );
}

// same function for two objects
user.whoAmI = sayHi;
admin.whoAmI = sayHi;

// THIS reference to object, which marked before DOT
user.whoAmI(); // john
admin.whoAmI(); // admin

admin['whoAmI'](); // alternative way to access

// ES6 and arrow function 
//https://habr.com/ru/post/515356/
const user = {
  name: 'Bob',
  userThis: this,
  func() {
    console.log(this);
  },
  arrowFunc: () => {
    console.log(this);
  }
};

console.log(user.userThis); // window
user.func(); // user
user.arrowFunc(); // window

