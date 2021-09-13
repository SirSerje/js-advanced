// partial application \w bind :
function add(a, b){ 
  return a + b; 
}
var add1 = add.bind(undefined, 1);
add1(2) // => 3

// currying example : 
const sum = a=>b=> a+b
const add1 = sum(1)
add1(4)


