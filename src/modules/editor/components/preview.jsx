import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import compile from '../compile'

window.React = require('react')
window.glamorous = require('glamorous').default

const EditorError = glamorous.pre({
  color: 'red'
})

class Preview extends React.Component {
  executeCode(code) {
    try {
      ReactDOM.unmountComponentAtNode(this.mountNode)
    } catch (e) {}
    try {
      clearTimeout(this.timeout)
      ReactDOM.render(
        eval(compile(`(function () { ${code} })()`)),
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
    return <div ref={ref => this.mountNode = ref} />
  }
}

Preview.propTypes = {
  code: PropTypes.string
}

export default Preview