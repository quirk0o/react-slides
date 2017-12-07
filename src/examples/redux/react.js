const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

const {createStore} = Redux
const store = createStore(counter)

class Renderer extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return null
  }
}

return <Renderer />
