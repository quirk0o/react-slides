const counter = (state = 0, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const {createStore} = Redux
const store = createStore(counter)

const Counter = () => (
  <div>
    <h1>{/* value */}</h1>
    <button onClick={() => {}}>+</button>
    <button onClick={() => {}}>-</button>
  </div>
)

/*
 * Don't worry about this component. It's here to make listening to store changes and rerendering your components easier
 */
class Renderer extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return <Counter />
  }
}

return <Renderer />

/*
 * EXERCISE
 * ========
 * Change the `Counter` component to use the state from the store and dispatch actions to change the state.
 */
