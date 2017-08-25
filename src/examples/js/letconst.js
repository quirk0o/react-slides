const aConstant = 42
// aConstant = 43 // <- throws SyntaxError (you cannot redefine a const)

const complexConstant = {}
complexConstant.prop = 1 // this is fine

var a
var a
let c
// let c // <- throws SyntaxError (cannot redeclare a let)

/* Block scope doesn't exist with var (it's always function scoped) */
{
  var varInBlock = 'var in a block'
}
console.log(varInBlock)

/* Let is block scoped */
{
  let letInBlock = 'let in a block'
}
// console.log(letInBlock) // <- throws ReferenceError

/* Let vs var */
const varInALoop = []
for (var i = 0; i < 3; i++) {
  /* Function gets reference to the same variable in every iteration */
  varInALoop.push(function () { console.log(i) })
}

const letInALoop = []
for (let j = 0; j < 3; j++) {
  /* Function gets reference to a new variable in every iteration */
  letInALoop.push(function () { console.log(j) })
}

console.log('var in a loop')
varInALoop.forEach(function (fun) { fun() })
console.log('let in a loop')
letInALoop.forEach(function (fun) { fun() })

