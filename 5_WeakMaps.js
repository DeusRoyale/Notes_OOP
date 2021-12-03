/* Module - 1 */

//Implementation Detail
const privateProps = new WeakMap()

//Public Interface
/* export */class Circle {
  
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



////////////////////////////////////////////////////////////////////////////////////////////////
/* Module - 2 */

//import {Circle} from 'path'

const c = new Circle(123564)

c.draw()
c.vanish()