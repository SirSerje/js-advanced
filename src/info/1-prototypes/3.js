// ES5 like
function CoffeeMachine(model, source, power = 220) {
  this._name = model;
  this._raw = source;
  this._isEuropean = power;
}

CoffeeMachine.prototype.getName = function () {
  return this.name;
}

// ES6
class CoffeeMachine {
  constructor(model, source, power = 220) {
    this._name = model;
    this._raw = source;
    this._isEuropean = power;
  }
  getName() {
    return this.name;
  }
}


// very similar to OOP languages, max profit for unterstanding
// not only syntax sugar 
// https://learn.javascript.ru/class#ne-prosto-sintaksicheskiy-sahar