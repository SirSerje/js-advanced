/**
 * Simple class of coffee machine.
 * @param {*} model - name of coffee machine
 * @param {*} source - what needs coffee machine to create a cup of cofffee grinded coffee beans / capsules / beans
 * @param {*} power - determine European like or American like power types (110 Volts or 220 Volts)
 */
function CoffeeMachine(model, source, power=220) {
  this._name = model;
  this._raw = source;
  this._isEuropean = power;
}

CoffeeMachine.prototype.getName = function () {
  return this.name;
}

//CoffeeMachine.prototype.toString = Object.prototype.toString;
CoffeeMachine.prototype.toString = function () {
  console.log(`this is ${this._name} coffee machine, worked on ${this._raw}`)
}


const nespresso = new CoffeeMachine('Nespresso', 'capsules', 110);


