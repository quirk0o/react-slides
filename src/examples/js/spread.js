const arr = [1, 2, 3, 4, 5]
const [firstItem, secondItem, ...rest] = arr
console.log('first', firstItem, 'second', secondItem)
console.log('rest', rest)

/* You can omit items with commas (use sparingly) */
const [, ...withoutFirstItem] = arr
console.log('without first item', withoutFirstItem)

/* You can use it to construct other arrays */
const biggerArr = [...arr, 6, 7, 8, 9, 10]
console.log('bigger array', biggerArr)

/* You can use it to pass arguments to a function */
function giveMeArguments(a, b, c) {
  console.log('arguments', a, b, c)
}
giveMeArguments(...arr) // additional arguments will be ignored
