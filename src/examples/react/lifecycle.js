class LifecycleExample extends React.Component {
  constructor(props) {
    super(props)

    /*
     * Only simple setup goes here like setting instance variables and binding methods.
     * This is only called once when the component is created.
     */

    this.state = {value: 1}

    this.increment = this.increment.bind(this)
    console.log('constructed')
  }

  componentWillMount() {
    /*
     * This gets called before the first render
     */
    console.log('mounting')
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
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    /*
     * This gets called before rerendering.
     * Do not modify state here.
     * You can prepare for the update here (whatever that means).
     */
    console.log('updating', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
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

return <LifecycleExample />

/*
 * EXERCISE
 * ========
 * Make the component rerender only when the value is even
 */