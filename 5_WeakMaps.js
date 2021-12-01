//Another implementation

const privateProps = new WeakMap()

class Circle {
  
  constructor(radius) {
    privateProps.set(this, {
      radius: radius,
      erase: () => {
        console.log("erased", this)
      },
    })
  }
  
  draw(){
    console.log(privateProps.get(this).radius)
  }

  vanish(){
    privateProps.get(this).erase()

    console.log('woosh!')
  }

}

const c = new Circle(123564)

c.draw()
c.vanish()