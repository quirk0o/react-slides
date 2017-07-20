const destructureMe = {foo: 'bar', a: 1}
const {foo, _} = destructureMe
console.log(foo)

function abcde({test}) {
  console.log(test)
}
abcde({test: 'test'})