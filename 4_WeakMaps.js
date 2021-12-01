// The WeakMaps HAVE to be hidden in a module!
const _radius = new WeakMap() // 'new' is necessary!
const _erase = new WeakMap() //a hidden method

//ONLY the class will be *exported*!
class Circle {
  constructor(radius){
    _radius.set(this, radius) //1st param: an obj~; 2nd param: value.
    
    /* 
    To avoid provoking the 'strict' method, use the arrow func~

    arrow func~ use the 'this' value of their container-func~
    */
    _erase.set(this, () => {
      console.log('erased', this)
    })
  }

  draw(){
    //to access the hidden prop~
    return _radius.get(this) // the object needs to be referenced!
  }

  vanish(){
    _erase.get(this)()

    console.log('woosh!')
  }
}

const c = new Circle(157)

console.log(c.draw())
console.log(c.vanish())