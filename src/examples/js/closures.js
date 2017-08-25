function counterFactory() {
  var count = 1

  return {
    value: function () { return count },
    increment: function () { return count++ }
  }
}

var counter1 = counterFactory()
console.log('Counter1: ' + counter1.value())
counter1.increment()
console.log('Counter1: ' + counter1.value())

/* Counter2 gets a reference to a newly created count variable */
var counter2 = counterFactory()
console.log('Counter2: ' + counter2.value())


