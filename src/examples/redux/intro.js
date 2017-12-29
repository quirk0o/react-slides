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

    this.state = counter(undefined, {})

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  dispatch(action) {
    this.setState(prevState => counter(prevState, action))
  }

  increment() {
    this.dispatch({type: 'INCREMENT'})
  }

  decrement() {
    this.dispatch({type: 'DECREMENT'})
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
