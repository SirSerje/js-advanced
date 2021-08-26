// constructor function


// 1. uppercase
// 2. should be called with `new` operator
function Point(x) {
 this._x = x;
}

// what is THIS?
function Point(x) {
  this = {} // implicitly
  this._x = x;
  return this // implicitly
}

// Possible to call without args like this, 
// but it's anti-pattern
new Point 
new Point();

// you can write it as one line, but for what? 
new function Point(x) {}()

// How does RETURN works?
// single value will be omited


function Point(x) {
  this._x = x
  return 'created' // omited
  return { foo: 'bar' } // return { foo: 'bar' }
  return // return this
  }