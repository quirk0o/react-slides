const UserContext = React.createContext(null)

class UserContextProvider extends React.Component {
  state = {user: null}

  handleLogin = (user, password) => {
    // api call
    this.setState({user: {name: user}})
  }
  handleLogout = () => this.setState({user: null})

  render() {
    return (
      <UserContext.Provider value={{user: this.state.user, onLogin: this.handleLogin, onLogout: this.handleLogout}}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const AuthenticatedComponent = ({user}) => (
  <p>The user is {user.name}</p>
)

const UnauthenticatedComponent = () => (
  <p>Not logged in</p>
)

const Nav = () => (
  <UserContext.Consumer>
    {({user, onLogin, onLogout}) =>
      <div>
        {user
          ? <button onClick={onLogout}>Logout</button>
          : <button onClick={() => onLogin('Bob', 'password')}>Login</button>
        }
      </div>
    }
  </UserContext.Consumer>
)

const Main = () => (
  <UserContext.Consumer>
    {({user}) =>
      user
        ? <AuthenticatedComponent user={user} />
        : <UnauthenticatedComponent />
    }
  </UserContext.Consumer>
)

class App extends React.Component {
  render() {
    return (
      <UserContextProvider>
        <Nav />
        <Main />
      </UserContextProvider>
    )
  }
}

return <App />
