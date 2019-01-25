function counterFactory() {
  var count = 1 // <------ This variable will be accessible to the counter's methods after the `counterFactory` finishes execution

  const counter = {
    value: function () { return count },
    increment: function () { return count++ }
  }
  return counter
}

var counter1 = counterFactory()
console.log('Counter1: ' + counter1.value())
counter1.increment() // Operating on the same count
console.log('Counter1: ' + counter1.value())

/* Counter2 gets a reference to a newly created count variable */
var counter2 = counterFactory()
console.log('Counter2: ' + counter2.value())


