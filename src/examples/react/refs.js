/*
 * To reference a DOM element you need to use the `ref` prop. It accepts a callback that's called
 * with the reference, so you need to assign it to an instance variable in order to be able to use it.
 */


class DynamicElement extends React.Component {
  handleChange = () => {
    this.element.style.color = this.element.style.color === 'pink' ? 'blue' : 'pink'
  }

  render() {
    return (
      <div>
        <button onClick={this.handleChange}>Change</button>
        <p ref={ref => this.element = ref}>Hello</p>
      </div>
    )
  }
}

return <DynamicElement />
