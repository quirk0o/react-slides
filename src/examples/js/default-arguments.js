function giveMeArguments(a = 1, {b, c} = {b: 'b', c: 'c'}) {
  console.log(`A: ${a}, B: ${b}, C: ${c}`)
}
giveMeArguments()
giveMeArguments(23)
giveMeArguments(23, {b: 1})
