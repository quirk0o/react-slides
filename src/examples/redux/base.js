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

/* STORE */
const store = createStore(counter)

/* VIEW */
const render = () => {
  document.getElementById('preview').innerText = store.getState()
}

store.subscribe(render)
render()

/* ACTION */
const INCREMENT_ACTION = {type: 'INCREMENT'}

document.addEventListener('click', () => {
  /* DISPATCHER */
  store.dispatch(INCREMENT_ACTION)
})
