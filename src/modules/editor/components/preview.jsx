import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import compile from '../compile'
import BoxButton from 'modules/editor/components/box-button'

window.React = require('react')
window.ReactDOM = require('react-dom')
window.Redux = require('redux')
window.ReactRedux = require('react-redux')
window.glamorous = require('glamorous').default

const {Div} = glamorous

const EditorError = glamorous.pre({
  color: 'red'
})

class Preview extends React.Component {
  constructor(...args) {
    super(...args)

    this.handleRun = this.handleRun.bind(this)
  }

  handleRun() {
    this.executeCode(this.props.code)
  }

  executeCode(code) {
    try {
      ReactDOM.unmountComponentAtNode(this.mountNode)
    } catch (e) {}
    try {
      clearTimeout(this.timeout)
      ReactDOM.render(
        eval(compile(`(function () { \n${code}\n }).bind({})()`)) || <div />,
        this.mountNode
      )
    } catch (e) {
      this.timeout = setTimeout(() =>
          ReactDOM.render(
            <EditorError>{e.toString()}</EditorError>,
            this.mountNode
          ),
        1000
      )
    }
  }

  componentDidMount() {
    this.executeCode(this.props.code)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.code !== this.props.code) {
      this.executeCode(nextProps.code)
    }
  }

  render() {
    return (
      <Div
        padding={20}
        display={!this.props.display && 'none'}
        position="relative"
        overflow="scroll"
      >
        <div ref={ref => this.mountNode = ref} id="preview" />
        <BoxButton onClick={this.handleRun}>Run</BoxButton>
      </Div>
    )
  }
}

Preview.propTypes = {
  code: PropTypes.string
}

export default Preview
