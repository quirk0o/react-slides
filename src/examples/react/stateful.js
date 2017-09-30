/*
 * Only a class component can have state
 */
class MyStatefulComponent extends React.Component {
  constructor(props) {
    super(props)

    /*
     * You always need to initialize your state in the constructor
     */
    this.state = {value: 0}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /*
     * Always use `setState` to modify state!
     * Never mutate any part of `this.state` directly
     */
    this.setState({value: this.state.value + 1})
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <button onClick={this.handleClick}>Increment</button>
        <p>{this.state.value}</p>
      </div>
    )
  }
}

return <MyStatefulComponent name="Awesome counter" />

/*
 * EXERCISE
 * ========
 * Add a button that toggles the operation between increment and decrement.
 */