/* You can have defaults for regular arguments and for object properties */
function giveMeArguments(a = 'a', {b = 'b', c = 'c'} = {}) {
  console.log(`A: ${a}, B: ${b}, C: ${c}`)
}

console.log('without arguments')
giveMeArguments()

console.log('without options argument')
giveMeArguments('abra')

/* Default arguments are smart and will merge your object with the defaults */
console.log('with partial options')
giveMeArguments('abraka', {b: 'bar'})

console.log('everything overriden')
giveMeArguments('abrakadabra', {b: 'barbie', c: 'cookiemonster'})

/* CAUTION
* You cannot call `giveMeOptions` without arguments because it doesn't have a default for the whole object
*/
function giveMeOptions({foo = 'foo', bar = 'bar'}) {
  console.log(`foo: ${foo}, bar: ${bar}`)
}

// giveMeOptions() // <- throws TypeError: Cannot read property `foo` of undefined
giveMeOptions({})