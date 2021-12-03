class Shape {
  move(){
    console.log('move shape')
  }
}

//Inheriting
class Circle extends Shape {
  
  move(){
    //To use code from the parent!
    super.move()

    console.log('move CIRCLE!')
  }
}

const c = new Circle()