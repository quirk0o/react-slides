class Person {
  favoriteColor = 'pink'

  constructor(name, age) {
    this._name = name
    this.age = age
  }

  isOfAge() {
    return this.age > 18
  }


  arrow = () => 'arrow'

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

  static truth() {
    return 42
  }
}

const bob = new Person('Bob', 40)
console.log('Bob\'s name is', bob.name)
console.log('Bob is of age', bob.isOfAge())
console.log('Bob\'s private name', bob._privateName())
console.log(bob.arrow())
console.log(bob.favoriteColor)
console.log(Person.truth())

class Child extends Person {

}

const bobJr = new Child('Bob Junior', 10)
console.log('Bob Junior is a Child', bobJr instanceof Child)
console.log('Bob Junior is a Person', bobJr instanceof Person)
