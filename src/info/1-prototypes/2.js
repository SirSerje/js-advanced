function CoffeeMachine(model, source, power = 220) {
  this._name = model;
  this._raw = source;
  this._isEuropean = power;
}

CoffeeMachine.prototype.getName = function () {
  return this.name;
}

CoffeeMachine.prototype.toString = function () {
  console.log(`this is ${this._name} coffee machine, worked on ${this._raw}`)
}
// _________________________________________________________________________________
// all prev code from 1-1.js
const nespresso = new CoffeeMachine('Nespresso', 'capsules', 110);

// instance of CoffeeMachine class relies on CoffeeMachine class itself
console.log(nespresso.__proto__ === CoffeeMachine.prototype);

// same for built in objects, i.g. Array
console.log([].__proto__ === Array.prototype);

// CoffeeMachine inherits Object, that means, our nespresso instance 
// have all properties same as regular object
console.log(nespresso.__proto__.__proto__ === Object.prototype);
// Actual example
Object.keys(nespresso)

// 
CoffeeMachine.prototype.hasOwnProperty = function () {
  return false;
}

console.log(nespresso.hasOwnProperty());