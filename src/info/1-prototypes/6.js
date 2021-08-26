// https://learn.javascript.ru/functional-inheritance
// https://fseby.wordpress.com/2016/02/09/%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-javascript-%D1%81%D0%BE%D0%B1%D0%B5%D1%81%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA%D0%B0%D0%BA%D0%B0%D1%8F-%D1%80/
// https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9
// https://alligator.io/js/class-composition/
// https://vimeo.com/69255635

function Machine(power) {
  this._power = power; // (1)

  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments); // (2)

  console.log( this._enabled ); // false
  console.log( this._power ); // 10000
}

var coffeeMachine = new CoffeeMachine(10000);
