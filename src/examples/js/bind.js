var contextNeeded = function (message) {
  console.log(message, this.prop)
}

var o1 = {prop: 'first object'}
var o2 = {prop: 'second object'}

// contextNeeded('without bind') // <- throws TypeError
contextNeeded.bind(o1)('bound with')

/* Same as */
contextNeeded.call(o1, 'called with')
contextNeeded.apply(o1, ['applied to'])

/* Already bound function cannot be bound again*/
contextNeeded.bind(o1).bind(o2)('still bound to')

/* You can also bind arguments of the original function*/
var argumentsNeeded = function(message, value) {
  console.log(message, value)
}

var withBoundArgument = argumentsNeeded.bind(null, 'I already have a message')
withBoundArgument(42)