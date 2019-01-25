function sayHello() {
  greeting = 'Hello'

  if (false) {
    var greeting
  }

  printHello(greeting)
}

function printHello(greeting) {
  console.log(greeting)
}

sayHello()

/* EQUIVALENT

function printHello(greeting) {
  console.log(greeting)
}

function sayHello() {
  var greeting
  greeting = 'Hello'

  if (false) {}

  printHello(greeting)
}

sayHello()
 */
