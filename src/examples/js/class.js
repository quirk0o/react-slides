class Person {
  constructor(name, age) {
    this._name = name
    this.age = age
  }

  isOfAge() {
    return this.age > 18
  }

  _privateName() {
    return 'Superman'
    // not really private :(
    // just a convention
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }
}

const bob = new Person('Bob', 40)
console.log('Bob is of age', bob.isOfAge())
console.log('Bob\'s private name', bob._privateName())

class Child extends Person {

}

const bobJr = new Child('Bob Junior', 10)
console.log('Bob Junior is a Child', bobJr instanceof Child)
console.log('Bob Junior is a Person', bobJr instanceof Person)
