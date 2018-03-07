/**
 * REDUCER
 *
 * It's a pure function that transforms a previous state and an action into new state.
 * The state argument should have a default so when it's called with no state it returns an initial state.
 *
 * IMPORTANT!: Never mutate the received state directly. In Redux everything should be immutable.
 *
 * @param {Object} state - previous state
 * @param {object} action
 *
 * @returns {Object} state - new state
 */

const counter = (state = {value: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {value: state.value + 1}
    case 'DECREMENT':
      return {value: state.value - 1}
    default:
      return state
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props)

    // We're using the component to store our state
    // We're initialising the state by calling our reducer
    this.state = counter(undefined, {})

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  dispatch(action) {
    // We're calling our reduer to receive the new state and store it in the component
    this.setState(prevState => counter(prevState, action))
  }

  increment() {
    /**
     * ACTION
     *
     * It's a plain JavaScript object that contains a `type` field - it's a string that represents the state mutation
     * we want to perform.
     * It can also contain a `payload` - that's any data you want to pass along.
     */
    const action = {type: 'INCREMENT'}
    this.dispatch(action)
  }

  decrement() {
    const action = {type: 'DECREMENT'}
    this.dispatch(action)
  }

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

return <Counter />

/*
 * EXERCISE
 * ========
 * Add another button that will revert the counter value to zero.
 */
