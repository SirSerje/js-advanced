// TODO:
// https://www.javatpoint.com/javascript-oops-abstraction

class AbstractDuck {
  constructor(name, weight) {
    this._name = name;
    this._weight = weight;
  }

  //..... other methods
  move() {}
  breath() {}
  run() {}
  see() {}
  
}
class GreenMagicDuck extends AbstractDuck {
 constructor(...args) {
   super(args)
   this._color = 'green'
   this._isUnicornNow = false
 }

 move() {
   if(this._isUnicornNow) {
      // implement movement like on a real rainbow
   } else {
     super.move()
   }
 }
 transformToUnicorn() {
   this._isUnicornNow = true
 }
}