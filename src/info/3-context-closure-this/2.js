//call

//problem:
let me = {
  //name: 'serhii',
  greet(){
    console.log(`hello, ${this.name}`);
  },
}
//solving:
me.call({name: 'greet'}).greet()

//feature
// function which is not rely to any concrete user
const uncleStepan = 200

function isTallerThan(referenceHeight) {
  if(referenceHeight < this.height) {
    console.log(this.name, 'taller than', referenceHeight);
  } else 
  console.log(this.name, 'lower than', referenceHeight);
}

const serhii = {
  name: 'serhii',
  height: 184,
}

const alex = {
  name: 'alex',
  height: 201
}

isTallerThan.call(serhii, uncleStepan)
isTallerThan.call(alex, uncleStepan)

// apply;

//calculator
//TODO: 

// OR
const serhii = {
  name: 'serhii',
  height: 184,
}

const alex = {
  name: 'alex',
  height: 201
}

function isTallerThan(args) {
  let isTaller = true
  for(let i = 0; i < args.length; i++) {
      current = args[i];
      if(current>this.height) {
        console.log(this.name, 'lower than', args);
        return
      }
  }
  console.log(this.name, 'taller than', args);
}

isTallerThan.call(serhii, [200, 205, 198]) // compare serhii to basketball players
isTallerThan.call(alex, [150, 121]) // compare alex to gnomes


