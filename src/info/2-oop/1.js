class User  {
  constructor(name) {
    this._name = name
  }

  getName() {
    return this._name
  }
  get creds() {
    return this._name
  }

  setName(name) {
    this._name = name
  }
  set creds(name) {
    this._name = name
  }

}


const john = new User('Sam')
john.creds = 'Samuel'
console.log(john.creds);
console.log(john.getName());

//The set syntax binds an object property to a function
//to be called when there is an attempt to set that
// property.

// get & set good to change prop behavior