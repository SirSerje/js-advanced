// show, how does object.create work
const a = Object.create(CoffeeMachine)
console.log(a);

const obj = {
  foo: 'bar',
  doSome: function () {
    console.log(this.foo, this.bar);
  }
}

const clone = Object.create(obj);
obj.foo = 'some';
obj.doSome();
obj.bar = 'one';
obj.doSome();

// inheritance with Object.create
function CoffeeMachine(model, source, power = 220) {
  this._name = model;
  this._raw = source;
  this._isEuropean = power;
}

CoffeeMachine.prototype.brew = function () {
  if (this._raw) {
    console.log('coffee is made');
  }
}

function MilkCoffeMachine() {
  CoffeeMachine.call(this)
}

MilkCoffeMachine.prototype = Object.create(CoffeeMachine.prototype)
MilkCoffeMachine.prototype.constructor = MilkCoffeMachine;

MilkCoffeMachine.prototype.heatMilk = function () {
  console.log('heating milk')
}

const milkMachine = new MilkCoffeMachine()
milkMachine.brew();
milkMachine.heatMilk();

console.log(milkMachine instanceof CoffeeMachine)
console.log(milkMachine instanceof MilkCoffeMachine)
console.log(milkMachine instanceof Object)
console.log(milkMachine instanceof Array)