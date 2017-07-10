export default function () {
  const chai = require('chai')

  // Make sure chai and jest ".not" play nice together
  const originalNot = Object.getOwnPropertyDescriptor(chai.Assertion.prototype, 'not').get
  Object.defineProperty(chai.Assertion.prototype, 'not', {
    get () {
      Object.assign(this, this.assignedNot)
      return originalNot.apply(this)
    },
    set (newNot) {
      this.assignedNot = newNot
      return newNot
    }
  })

// Combine both jest and chai matchers on expect
  const originalExpect = global.expect

  global.expect = (actual) => {
    const originalMatchers = originalExpect(actual)
    const chaiMatchers = chai.expect(actual)
    return Object.assign(chaiMatchers, originalMatchers)
  }

  Object.assign(global.expect, originalExpect)
}