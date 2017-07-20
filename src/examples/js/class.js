class MyClass {
  constructor() {
  }

  aMethod() {
    console.log('public')
  }

  _aPrivateMethod() {
    console.log('private')
    // not really :(
  }
}

const myClassInstance = new MyClass()
myClassInstance.aMethod()
myClassInstance._aPrivateMethod()