class UncontrolledInput extends React.Component {
  render() {
    return (
      <div>
        <label>Uncontrolled input</label>
        <input ref={ref => this.input = ref} />
      </div>
    )
  }
}

return <UncontrolledInput />

/*
 * EXERCISE
 * ========
 * Add a button that will double the content of the input when clicked.
 */
