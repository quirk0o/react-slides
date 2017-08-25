const destructureMe = {foo: 'foo', bar: 'bar', unwanted: 'unwanted'}

/* You can pick and choose properties (as many as you want)
 * You can assign to a variable with a different name too
*/
const {foo, bar: cookieMonster} = destructureMe
console.log(foo, cookieMonster)

/* You can also destructure function arguments */
function iEatObjects({foo}) {
  console.log(foo)
}
iEatObjects({foo: 'foo'})