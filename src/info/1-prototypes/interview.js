// Regular interview question: run this code correctly
// [1, 2, 3, 4, null].odd; // [1, 3]
Array.prototype.odd = function () {
  return this.filter(i => i % 2 === 1)
}

console.log([1, 2, 3, 4].odd()); // [1,3]