var fun = function (message) {
  console.log(message, this.b)
}

var o = {b: 2}

// fun('without bind')
fun.bind(o)('property of o'); // fun.call(a, 23)
