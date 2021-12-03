class Shape {
  constructor(color){
    this.color = color
  }

  fill(){
    console.log('filled', this.color)
  }
}

//Inheriting!
class Circle extends Shape{
  //call constructor from the parent using'super' (to initialize the base obj~)
  constructor(color, radius){
    //use 'super' to pass the argument to the parent
    super(color)
    this.radius = radius
  }

  draw(){
    console.log(`Drew ${this.color} circle with radius ${this.radius} cm`)
  }

  erase(){
    console.log('circle erased!')
  }
}

const c = new Circle('red', 51)

