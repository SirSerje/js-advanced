function whereAmI () {
  console.log('Im at the ', this.location)
}

const maldives = {location: 'maldives'}
const atTheMaldives = whereAmI.bind(maldives) 
atTheMaldives() // Im at the maldives
