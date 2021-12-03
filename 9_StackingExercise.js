const _items = new WeakMap()

class Stack {
  constructor(){
    _items.set(this, [])
  }

  push(obj){
    _items.get(this).push(obj)
    //console.log(_items.get(this))
  }

  pop(){
    if(_items.get(this).length ===0)throw new Error('stack empty!')

    return _items.get(this).pop()
  }

  //to see element on top
  peek(){
    //should've created a 'const' for the array!

    if(_items.get(this).length ===0)throw new Error('stack empty!')

    return _items.get(this)[_items.get(this).length - 1]
  }

  get count(){
    return _items.get(this).length
  }
}

const s = new Stack()