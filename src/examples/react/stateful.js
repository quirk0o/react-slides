class MyStatefulComponent extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target: {value}}) {
    this.setState({value})
  }

  render() {
    return (
      <div>
        <label>Controlled input</label>
        <input value={this.state.value} onChange={this.handleChange} />
        <p>{this.props.a}</p>
      </div>
    );
  }
}

return <MyStatefulComponent a={42} />