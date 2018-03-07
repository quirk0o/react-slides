const {createStore} = Redux
const {Provider, connect} = ReactRedux

const todos = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(todos)

const Counter = ({todos}) => (
  <div>
    <h2>Completed todos: {todos.filter(todo => todo.completed).length}</h2>
    <h2>Unfinished todos: {todos.filter(todo => !todo.completed).length}</h2>
  </div>
)

const Todo = ({todo, onToggle}) => (
  <span><input type="checkbox" value={todo.completed} onChange={onToggle} />{todo.text}</span>
)

const TodoList = ({todos, onTodoToggle}) => (
  <ol>
    {todos.map(todo => (
      <li key={todo.id}><Todo todo={todo} onToggle={() => onTodoToggle(todo.id)} /></li>
    ))}
  </ol>
)

const TodoInput = ({value, onChange}) => (
  <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="New Todo" />
)

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {todoInput: ''}

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleInputChange(value) {
    this.setState({todoInput: value})
  }

  handleAddTodo() {

  }

  render() {
    const {todoInput} = this.state

    return (
      <div>
        <Counter />
        <TodoInput value={todoInput} onChange={this.handleInputChange} />
        <button onClick={this.handleAddTodo}>Add Todo</button>
        <TodoList />
      </div>
    )
  }
}

return (
  <Provider store={store}>
    <App />
  </Provider>
)

/*
 * EXERCISE
 * ========
 * Recreate the todo example app with the use of Redux. Use the building blocks above to get started
 */

