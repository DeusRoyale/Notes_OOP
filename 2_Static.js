class Circle {

  constructor(radius) {
    this.radius = radius
  }

  // Instance method -> Tied to one new specific Circle object!
  draw() {
    console.log("draw")
  }

  //Static method -> Directly/Only tied to the class itself!(utility func~)
  static parse(str){
    const radius = JSON.parse(str).radius //radius property of the JSON obj~
    return new Circle(radius)
  }
}

/* 
const circle = new circle(1)

*** circle.parse() --> not available!!! *** 

*/

//Sooooooo...don't really have to use 'new'
const circle = Circle.parse('{"radius" : 1}')
console.log(circle) 

//where as...
const circle2 = new Circle(2)
console.log(circle2) 