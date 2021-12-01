//Abstraction and ***Private Properties***

const _radius = Symbol() // the Symbol func~ gives a different unique value everytime it's called 
const draw = Symbol()

class Circle {
  constructor(radius, color){
    //this.radius = radius
    //this['radius']=radius

    this[_radius]=radius //only with 'Symbol()'. 
    //thing inside the " [] " needs to be unique!

    this.color = color
  }

  [draw](){
    console.log( `${this.color} circle!`)
  }


}

const c = new Circle(3, 'blue')
console.log(c.color)
//console.log(c.radius) // Symbol() prevents the 'radius' property from *directly* being accessed!

// to access:
const keys = Object.getOwnPropertySymbols(c)[0] //first SYMBOL that you get! 
console.log(c[keys], c)

const key2 = Object.getOwnPropertySymbols(c.__proto__)[0]
console.log(c.__proto__[key2], c.__proto__[key2](), c.__proto__) //PROBLEM!!!
