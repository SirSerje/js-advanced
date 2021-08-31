console.log('hello world');

//garbage collector

//1 nulling
const user = { name: 'John' };
const user = null;

//2 replacing
const user = { name: 'John' };
let admin = { name: 'Sam' };
admin = user

//3 
const user = { name: 'John' };
const admin = { name: 'Brett' };
const family = {
    parents: {
        father: user,
        mother: admin,
    }
}

delete family.parents;
user = null;
admin = null
