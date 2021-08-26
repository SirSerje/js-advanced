class CoffeeMachine {
  constructor(model, source, power = 220) {
    this._name = model;
    this._raw = source;
    this._isEuropean = power;
  }

  getName() {
    return this._name;
  }

  makeCofffe() {
    log('preparing some espresso')
  }
}



// ES6 
class CoffeeMilkMachine extends CoffeeMachine {
  constructor(name, source, power = 220, canHeatMilk) {
    super(name, source, power)
    this._canHeat = canHeatMilk
  }

  getCanHeat() {
    return this._canHeat;
  }

  getName() {
    return `${this._name} with Cappuchinator`;
  }

  makeCofffe() {
    if(this._canHeat) {
      console.log('blend some milk');
    }
    super.makeCofffe();
    console.log('mixing');
  }

}

const a = new CoffeeMilkMachine('Phillips', 'roasted beans', 220, true)
a.makeCofffe()