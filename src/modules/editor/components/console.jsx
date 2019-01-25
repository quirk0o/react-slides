import React from 'react'
import glamorous from 'glamorous'
import BoxButton from './box-button'

const ConsoleMessages = glamorous.ul({
  overflowY: 'scroll',
  margin: 0,
  height: '100%',
  fontSize: 14,
  listStyle: 'none',
  padding: 0
})

const ConsoleMessage = glamorous.li(
  {
    fontFamily: 'monospace',
    fontSize: 12,
    borderBottom: '1px solid #ddd',
    padding: '8px 24px',
    '> pre': {margin: 0, whiteSpace: 'normal'}
  },
  ({type}) => ({
    color: type === 'error' ? 'red' : type === 'warn' ? 'orange' : 'black',
    background: type === 'error' ? '#FFF0F0' : type === 'warn' ? '#FFFBE5' : 'transparent'
  })
)

function messageToString(msg) {
  if (typeof msg === 'undefined') {
    return 'undefined'
  }
  if (msg === null) {
    return 'null'
  }
  if (typeof msg === 'object') {
    return JSON.stringify(msg)
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
    const {proxy, revoke} = Proxy.revocable(console, {
      get: (target, p, receiver) => {
        if (['log', 'warn', 'error'].includes(p)) {
          return (...args) => {
            this.setState(
              ({console}) => ({console: console.concat([{type: p, args}])}),
              () => Reflect.get(target, p, receiver).apply(target, args)
            )
          }
        }
        return Reflect.get(target, p, receiver)
      }
    })
    this._console = console
    console = proxy
    this._revoke = revoke
  }

  componentDidUpdate(prevProps, prevState) {
    this.messagesNode.scrollTop = this.messagesNode.scrollHeight
  }

  componentWillUnmount() {
    console = this._console
    this._revoke()
  }

  handleClear() {
    this.setState({console: []})
  }

  render() {
    return (
      <div className={this.props.className} style={{padding: 0}}>
        <ConsoleMessages innerRef={ref => this.messagesNode = ref}>
          {this.state.console.map(({type, args}, index) => (
            args.map((arg, idx) => <ConsoleMessage key={`${index}-${idx}`} type={type}>
              <pre>{messageToString(arg)}</pre>
            </ConsoleMessage>)
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
