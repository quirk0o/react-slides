class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: 'Empty'}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target: {value}}) {
    this.setState({name: value})
  }

  render() {
    const {name} = this.state

    return (
      <div>
        <input value={name} onChange={this.handleChange} />
        <Child name={name} />
      </div>
    )
  }
}

class Child extends React.Component {
  componentWillReceiveProps(nextProps) {
    /*
     * This is called whenever the component props change.
     * You can use this method to modify the state based on the changing props.
     * Changing state here will not cause an additional render.
     *
     * IMPORTANT: Always check that the prop you're using has actually changed
     */

    if (nextProps.name !== this.props.name) {
      console.log(`current props: ${this.props.name}`)
      console.log(`next props: ${nextProps.name}`)
    }
  }

  render() {
    return <p>{this.props.name}</p>
  }
}

return <Parent />

/*
 * EXERCISE
 * ========
 * Style the name pink when it's a girl (ends with 'a') and blue when it's a boy.
 */