import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import compile from '../compile'
import {Subject} from 'rxjs'
import {debounceTime} from 'rxjs/operators'

window.React = require('react')
window.ReactDOM = require('react-dom')
window.Redux = require('redux')
window.ReactRedux = require('react-redux')
window.glamorous = require('glamorous').default
window.PropTypes = require('prop-types')

const {Div} = glamorous

const EditorError = glamorous.pre({
  color: 'red',
  fontSize: 11
})

class Preview extends React.Component {
  code$ = new Subject()

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

    this.code$subscription = this.code$.pipe(
      debounceTime(2000)
    ).subscribe((code) => {
      this.executeCode(code)
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.code !== this.props.code) {
      this.code$.next(this.props.code)
    }
  }

  componentWillUnmount() {
    try {
      ReactDOM.unmountComponentAtNode(this.mountNode)
    } catch (e) { console.warn(e)}
    this.code$subscription.unsubscribe()
  }

  render() {
    return (
      <Div
        className={this.props.className}
        padding={20}
        display={!this.props.display && 'none'}
        overflow="scroll !important"
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
