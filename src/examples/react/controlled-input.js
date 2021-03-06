class ControlledInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  /*
   * This method receives a regular old browser event
   */
  handleChange(event) {
    const {target: {value}} = event
    this.setState({value})
  }

  render() {
    return (
      <div>
        <label htmlFor="input">Controlled input</label>
        <input id="input" value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.value}</p>
      </div>
    )
  }
}

return <ControlledInput />

/*
 * EXERCISE
 * ========
 * Add a checkbox that toggles between disabling the input above
 */
