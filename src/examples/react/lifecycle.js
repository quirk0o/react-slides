class LifecycleExample extends React.Component {
  constructor(props) {
    super(props)

    /*
     * Only simple setup goes here like setting instance variables and binding methods.
     * This is only called once when the component is created.
     */

    this.state = {value: props.initialValue}

    this.increment = this.increment.bind(this)
    console.log('constructed')
  }

  static getDerivedStateFromProps(props, state) {
    /*
     * Return new state based on a change in props
     * Use very sparingly - consider an anti-pattern
     */
    console.log('getting state from props')
    return null
  }

  componentDidMount() {
    /*
     * Any initial setup goes here like making API calls.
     * This gets called after the first render.
     */
    console.log('mounted')
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*
     * If you return false here the component will not be rerendered.
     */
    console.log('to update or not to update?')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    /*
     * Called after updating props, state and calling render but before committing to the DOM
     * You can use this method to read the state of the DOM (e.g. scroll position)
     * Anything you return from this method will be passed as a third argument to `componentDidUpdate`
     */
    console.log('getting snapshot')
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /*
     * This gets called after rerendering.
     * Do not modify state here because it will cause another rerender.
     * You can perform any DOM operations here based on prop/state changes.
     */
    console.log('updated', prevProps, prevState)
  }

  componentWillUnmount() {
    /*
     * Do any cleanup like canceling timeouts, closing WebSocket connections etc.
     */
    console.log('component will unmount')
  }

  increment() {
    this.setState({value: this.state.value + 1})
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

return <LifecycleExample initialValue={0} />

/*
 * EXERCISE
 * ========
 * Make the component rerender only when the value is even
 */
