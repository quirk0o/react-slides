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

let todoId = 1

class God extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: {value: 0},
      todoInput: '',
      todos: [
        {id: todoId++, text: 'Buy milk', completed: false}
      ]
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleTodoToggle = this.handleTodoToggle.bind(this)
  }

  handleInputChange(value) {
    this.setState({todoInput: value})
  }

  handleAddTodo() {
    this.setState(state => ({
      todos: state.todos.concat([{id: todoId++, text: state.todoInput, completed: false}])
    }))
  }

  handleTodoToggle(id) {
    this.setState(state => {
      const todoIdx = state.todos.findIndex(todo => todo.id === id)
      const todo = state.todos[todoIdx]
      const updatedTodo = {...todo, completed: !todo.completed}
      return {todos: state.todos.slice(0, todoIdx).concat([updatedTodo]).concat(state.todos.slice(todoIdx + 1))}
    })
  }

  render() {
    const {todoInput, todos} = this.state

    return (
      <div>
        <Counter todos={todos} />
        <TodoInput value={todoInput} onChange={this.handleInputChange} />
        <button onClick={this.handleAddTodo}>Add Todo</button>
        <TodoList todos={todos} onTodoToggle={this.handleTodoToggle} />
      </div>
    )
  }
}

return <God />
