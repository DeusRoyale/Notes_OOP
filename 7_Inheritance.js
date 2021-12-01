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
  //call constructor from the parent class first (to initialize the base obj~)
  constructor(color, radius){
    super(color)
    this.radius = radius
  }

  draw(){
    console.log('Drew circle with radius', this.radius)
  }

  erase(){
    console.log('circle erased!')
  }
}

const c = new Circle('red', 51)

