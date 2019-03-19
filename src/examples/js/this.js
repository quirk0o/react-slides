var cat = {
  name: 'Cat',
  meow: function () {
    console.log(this.name + ' says: Meooow')
  }
}

cat.meow()

var Garfield = {
  name: 'Garfield',
  meow: cat.meow
}

/*
 * The function does not have an assigned `this` value until it is actually called
 * `this` is then assigned the value of the object that is calling the function
 */
Garfield.meow() // in this case the object is Garfield

/*
 * When assigning the function to a variable we're only storing a reference to the function
 * When it is invoked it doesn't have a reference to any object
 */
var meowLater = cat.meow

meowLater()
