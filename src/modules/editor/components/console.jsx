import React, {PropTypes} from 'react'
import glamorous from 'glamorous'
import BoxButton from './box-button'

function wrapConsole(method, callback) {
  const _console = console[method]
  console[method] = function (...args) {
    callback(...args)
    _console(...args)
  }
}

const ConsoleMessages = glamorous.ul({
  overflow: 'scroll',
  boxSizing: 'border-box',
  margin: 0,
  height: 250
})

class Console extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {console: []}

    this.handleClear = this.handleClear.bind(this)
  }

  componentDidMount() {
    const _log = console.log,
      _warn = console.warn,
      _error = console.error

    console.log = (...args) => {
      this.setState({console: this.state.console.concat([{type: 'log', args}])})
      return _log.apply(console, args)
    }

    console.warn = (...args) => {
      this.setState({console: this.state.console.concat([{type: 'warn', args}])})
      return _warn.apply(console, args)
    }

    console.error = (...args) => {
      this.setState({console: this.state.console.concat([{type: 'error', args}])})
      return _error.apply(console, args)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.console.length > prevState.console.length) {
      this.messagesNode.scrollTop = this.messagesNode.scrollHeight
    }
  }

  handleClear() {
    this.setState({console: []})
  }

  render() {
    return (
      <div className={this.props.className}>
        <ConsoleMessages innerRef={ref => this.messagesNode = ref}>
          {this.state.console.map(({type, args}, index) => (
            <li key={index}>
              <pre>{args.map(arg => arg.toString()).join(' ')}</pre>
            </li>
          ))}
        </ConsoleMessages>
        <BoxButton onClick={this.handleClear}>Clear</BoxButton>
      </div>
    )
  }
}

Console.propTypes = {}

export default glamorous(Console)({
  position: 'relative',
  gridColumnEnd: 'span 2'
})