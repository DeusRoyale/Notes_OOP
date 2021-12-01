const _radius = new WeakMap()

class Circle {
  constructor(radius){
    _radius.set(this, radius)
  }

  //To read as a **property** & not a method!
  get radius(){
    return _radius.get(this)
  }


  set changeRadius(value){
    if(value <=0)throw new Error('Invlaid value')
    _radius.set(this, value)
    
  }
}

const c = new Circle(1)

//console.log(c.radius)