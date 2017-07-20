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
    console.log(`current props: ${this.props.name}`)
    console.log(`next props: ${nextProps.name}`)
  }

  render() {
    return <p>{this.props.name}</p>
  }
}

return <Parent />