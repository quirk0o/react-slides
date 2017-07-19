class UncontrolledInputExample extends React.Component {
  constructor(...args) {
    super(...args)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const value = this.input.value
    console.log(value)
    // ...
  }

  render() {
    return (
      <div>
        <label>Uncontrolled input</label>
        <input ref={ref => this.input = ref} />
        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

return <UncontrolledInputExample />