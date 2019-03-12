class BadComponent extends React.Component {
  state = {color: 'black'}

  badMethod() {
    this.setState((state) => ({color: state.color === 'pink' ? 'blue' : 'pink'}))
  }

  render() {
    return <p style={{color: this.state.color}}>Hello</p>
  }
}

class DynamicElement extends React.Component {
  handleChange = () => {
    this.component.badMethod()
  }

  render() {
    return (
      <div>
        <button onClick={this.handleChange}>Change</button>
        <BadComponent ref={ref => this.component = ref} />
      </div>
    )
  }
}

return <DynamicElement />
