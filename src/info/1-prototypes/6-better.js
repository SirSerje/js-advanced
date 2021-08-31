http://julien.richard-foy.fr/blog/2011/10/30/functional-inheritance-vs-prototypal-inheritance/

// this functional inheritance works like
// factory (return's new something after calling)
function anyElectricMachine(data) {
  // BONUS one
  if(typeof anyElectricMachine.caller !== 'function') {
    console.error('should be instantinated')
    // or like this
    // throw new Error(should be instantinated);
  }
  const that = {} //actually new Object()
  that.name = data.name; // assign to object property
  return that; // return new object
}

function realCoffeeMachine(data) {
  const that = anyElectricMachine(data) //call parent
  // extending functionality
  that.brew = function () {
    console.log(`My name is ${that.name} and brewing coffee for you :)`);
  }
  // return as parent
  return that
}

// why lowercase? 
// because code is NOT used with new
const myCoffeMaker = realCoffeeMachine({name: 'nespresso'})
const friendsCM = realCoffeeMachine({name: 'gusto'})
myCoffeMaker.brew();
friendsCM.brew();

new anyElectricMachine() // error goes here