const destructureMe = {foo: 'foo', bar: 'bar', unwanted: 'unwanted'}

/*
 * You can pick and choose properties (as many as you want)
 * and assign them to a variable (the name of the variable
 * is given after the `:` )
*/
const {foo: foo, bar: cookieMonster} = destructureMe
console.log(foo, cookieMonster)
/*
 * Equivalent to:
 * const foo = destructureMe.foo
 * const cookieMonster = destructureMe.bar
 */

/* You can also destructure function arguments */
function iEatObjects({foo: foo}) {
  console.log(foo)
}
iEatObjects({foo: 'foo'})

/*
 * There is a shorthand for assigning a property
 * to a variable with the same name
 */
const obj = {hello: 'world'}
const {hello} = obj
/*
 * Equivalent to
 * const {hello: hello} = obj
 */
