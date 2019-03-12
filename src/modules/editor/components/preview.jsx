import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import compile from '../compile'

window.React = require('react')
window.ReactDOM = require('react-dom')
window.Redux = require('redux')
window.ReactRedux = require('react-redux')
window.glamorous = require('glamorous').default

const {Div} = glamorous

const EditorError = glamorous.pre({
  color: 'red',
  fontSize: 11
})

class Preview extends React.Component {
  constructor(...args) {
    super(...args)

    this.run = this.run.bind(this)
  }

  run() {
    this.executeCode(this.props.code)
  }

  executeCode(code) {
    try {
      ReactDOM.unmountComponentAtNode(this.mountNode)
    } catch (e) { console.warn(e)}
    try {
      clearTimeout(this.timeout)
      setTimeout(() => ReactDOM.render(
        eval(compile(`(function () { \n${code}\n }).bind({})()`)) || <div />,
        this.mountNode
      ), 0)
    } catch (e) {
      this.timeout = setTimeout(
        () => console.error(e.toString()),
        1000
      )
    }
  }

  componentDidMount() {
    this.executeCode(this.props.code)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.code !== this.props.code) {
      this.executeCode(this.props.code)
    }
  }

  componentWillUnmount() {
    try {
      ReactDOM.unmountComponentAtNode(this.mountNode)
    } catch (e) { console.warn(e)}
  }

  render() {
    return (
      <Div
        className={this.props.className}
        padding={20}
        display={!this.props.display && 'none'}
        overflow="scroll"
      >
        <div ref={ref => this.mountNode = ref} id="preview" />
      </Div>
    )
  }
}

Preview.propTypes = {
  code: PropTypes.string
}

export default Preview
