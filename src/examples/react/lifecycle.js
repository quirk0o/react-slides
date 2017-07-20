class LifecycleExample extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {value: 1}
    console.log('constructed')
  }

  componentWillMount() {
    console.log('mounting')
  }

  componentDidMount() {
    // API calls, setup etc.
    console.log('mounted')

    this.interval = setInterval(
      () => {
        console.log(this.state.value)
        this.setState({value: this.state.value + 1})
      },
      1000)

  }

  componentWillReceiveProps(nextProps) {
    // e.g. change state based on new props
  }

  componentWillUpdate() {
    console.log('updating')
  }

  componentDidUpdate() {
    console.log('updated')
  }

  componentWillUnmount() {
    // cleanup e.g. clearInterval
    console.log('component will unmount')
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    return (
      <div>
        <p>{this.props.a}</p>
        <p>{this.state.value}</p>
      </div>
    )
  }
}

return <LifecycleExample />
