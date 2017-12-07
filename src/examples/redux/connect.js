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

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const store = createStore(counter)

const mapStateToProps = (state) => ({
  value: state
})

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({
    type: 'INCREMENT'
  }),
  onDecrement: () => dispatch({
    type: 'DECREMENT'
  })
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

return (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
)
