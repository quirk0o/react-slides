function namedFunction () {
  return 'named'
}
console.log(namedFunction())

const arrowFunction = () => {
  return 'arrow'
}
console.log(arrowFunction())

const shorthandArrowFunction = () => 'shorthand'
console.log(shorthandArrowFunction())

const anObject = {
  prop: 'prop',
  foo: function() {
    return this.prop
  },
  foofoo: function() {
    return () => this.prop
  }
}
anObject.foo() // `foo` has `this` bound to `anObject`

/* Arrow functions do not have their own context and they cannot be bound */
anObject.arrowfoo = () => this.prop
console.log('arrowfoo', anObject.arrowfoo())
console.log('bound arrowfoo', anObject.arrowfoo.bind(anObject)())

/* They share the context of the enclosing scope */
console.log('foofoo', anObject.foofoo()())