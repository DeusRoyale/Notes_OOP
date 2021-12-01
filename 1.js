//Here we go!

class FirstClass {
  //constructor is a function to create an obj
  //parameters are set HERE!
  constructor(radius) {
    this.radius = radius // the 'radius AFTER 'this' is what we use!
  }

  //EVERYTHING in the body(outide of the constructor) will fall in the prototype obj
  draw() {
    console.log("draw")
  }
}

//'new' is enforced in ES6!
const fC = new FirstClass(1)

/* the body is executed in 'strict mode'.
(prevents methods from being called as'independent' functions that may mess with the 'Window') */
//classes don't get hoisted!
