/*
 * To reference a DOM element you need to use the `ref` prop. It accepts a callback that's called
 * with the reference, so you need to assign it to an instance variable in order to be able to use it.
 */

class Refs extends React.Component {
  render() {
    return (
      <div>
        <input ref={ref => this.input = ref} />
        {/*
         * You might find references to string refs but those are deprecated so don't use them :)
         */}
        <input hidden ref="deprecated" />
      </div>
    )
  }
}

return <Refs />

/*
 * EXERCISE
 * ========
 * Add a button that will focus the input above.
 * `focus` is a method on the input element.
 */