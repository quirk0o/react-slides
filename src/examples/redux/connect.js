const {createStore} = Redux
const {Provider, connect} = ReactRedux

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

/*
 * This is a more desirable pattern than the previous slide - the Counter is a pure presentational component and doesn't
 * know where the data is stored.
 *
 * But we need to be able to connect it to the Redux store somehow
 */
const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

// Here we're mapping the state to the `value` prop
const mapStateToProps = (state) => ({
  value: state
})

// Here we're creating callbacks that dispatch increment/decrement actions when called
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({
    type: 'INCREMENT'
  }),
  onDecrement: () => dispatch({
    type: 'DECREMENT'
  })
})

/**
 * `connect` is a utility that makes it easier to map the store state to component props and create callbacks that
 * dispatch actions.
 *
 * @param {Function} mapStateToProps - function that receives the state and returns props
 * @param {Function} mapDispatchToProps - function that receives the dispatch function and returns props
 */
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

/*
 * We need to wrap our whole app in a `Provider` component. This will inject the store into all your components so that
 * `connect` can access it. This uses Reacts `context` mechanism under the hood.
 */
return (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
)
