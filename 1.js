//Here we go!

class FirstClass {
  //constructor is a function to create an obj
  constructor(radius) {
    this.radius = radius
  }

  //EVERYTHING in the body(outide of the constructor) will fall in the prototype obj
  draw() {
    console.log("draw")
  }
}

//'new' is enforced in ES6!
const fC = new FirstClass(1)

//the body is executed in 'strict mode'.(prevents methods from being called as 'single' functions)
//classes don't get hoisted!
