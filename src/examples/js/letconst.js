const aConstant = 42
// aConstant = 43

{
  var varInBlock = 'variable in a block';
}
console.log(varInBlock)

{
  let letInBlock = 'let in a block'
}
// console.log(letInBlock)

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log('var in loop ' + i)
  }, 0)
}

for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log('let in loop ' + j)
  }, 0)
}

var a
let c
// let c
