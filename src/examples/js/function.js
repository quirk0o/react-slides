var a = 'outer a'
var b = 'outer b'

function invokeMe() {
  var a = 'inner a'
  console.log('a: ', a)
  console.log('b: ', b)
}

invokeMe()