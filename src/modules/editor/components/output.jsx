import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import compile from '../compile'

// require('expose-loader?React!react');

class Output extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {code: compile(this.props.code)}
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.code !== nextProps.code) {
      this.setState({code: compile(nextProps.code)})
    }
  }

  render() {
    return <div>{eval(this.state.code)}</div>
  }
}

Output.propTypes = {}

export default Output