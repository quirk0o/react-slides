import {isFunction} from 'lodash'

export default function () {
  global.def = (propName, getter) => {
    beforeEach(function () {
      const _previousValue = this[propName]
      let lazy

      Object.defineProperty(this, propName, {
        get () {
          if (!lazy) {
            if (isFunction(getter)) {
              lazy = getter.call(this, _previousValue)
            } else {
              lazy = getter
            }
          }
          return lazy
        },
        set () {
        },
        enumerable: true,
        configurable: true
      })
    })
  }

  global.subject = (getter) => def('subject', getter)
}