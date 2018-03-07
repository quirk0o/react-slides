const {createStore} = Redux

/* REDUCER */
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

/**
 * STORE
 *
 * The store is a singleton object that contains the state of our application.
 *
 * @member {Function} getState - returns the current state
 * @member {Function} dispatch - sends an action to be queued to the store
 * @member {Function} subscribe - adds a listener callback to state changes
 *
 * `createStore` initializes Redux in our application
 */
const store = createStore(counter)

/*
 * VIEW
 *
 * This will fetch the store's state and inject it into the DOM.
 * `preview` is the id of the preview block on the right
 */
const render = () => {
  document.getElementById('preview').innerText = store.getState()
}

// We're going to call `render` every time the state changes
store.subscribe(render)
// We need to call it once to initialize the view
render()

/* ACTION */
const INCREMENT_ACTION = {type: 'INCREMENT'}


document.addEventListener('click', () => {
  /* DISPATCHER */
  store.dispatch(INCREMENT_ACTION)
})
