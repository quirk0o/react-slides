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
  margin: 0,
  height: '100%',
  fontSize: 14,
  listStyle: 'none',
  padding: 0
})

const ConsoleMessage = glamorous.li({
  borderBottom: '1px solid #ddd',
  padding: '5px 20px',
  '> pre': {margin: 0}
})

function messageToString(msg) {
  if (typeof msg === 'undefined') {
    return 'undefined'
  }
  if (msg === null) {
    return 'null'
  }

  return msg.toString()
}

class Console extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {console: []}

    this.handleClear = this.handleClear.bind(this)
  }

  componentDidMount() {
    this._log = console.log
    this._warn = console.warn
    this._error = console.error

    console.log = (...args) => {
      this.state.console.push({type: 'log', args})
      this.setState({console: this.state.console})
      return this._log.apply(console, args)
    }

    console.warn = (...args) => {
      this.state.console.push({type: 'warn', args})
      this.setState({console: this.state.console})
      return this._warn.apply(console, args)
    }

    console.error = (...args) => {
      this.state.console.push({type: 'error', args})
      this.setState({console: this.state.console})
      return this._error.apply(console, args)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.messagesNode.scrollTop = this.messagesNode.scrollHeight
  }

  componentWillUnmount() {
    console.log = this._log
    console.warn = this._warn
    console.error = this._error
  }

  handleClear() {
    this.setState({console: []})
  }

  render() {
    return (
      <div className={this.props.className}>
        <ConsoleMessages innerRef={ref => this.messagesNode = ref}>
          {this.state.console.map(({type, args}, index) => (
            <ConsoleMessage key={index}>
              <pre>{args.map(arg => messageToString(arg)).join(' ')}</pre>
            </ConsoleMessage>
          ))}
        </ConsoleMessages>
        <BoxButton onClick={this.handleClear}>Clear</BoxButton>
      </div>
    )
  }
}

Console.propTypes = {}

export default glamorous(Console)({
  position: 'relative'
})