import React, {Component} from 'react'
import CodeMirror from 'react-codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/jsx/jsx'
import Output from 'modules/editor/components/output'

class CMEditor extends Component {
  constructor(...args) {
    super(...args)
    this.state = {code: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(code) { this.setState({code}) }

  render() {
    return (
      <div>
        <CodeMirror
          value={this.state.code}
          onChange={this.handleChange}
          options={{
            tabSize: 2,
            mode: 'jsx'
          }}
          autoFocus
        />
        <Output code={this.state.code} />
      </div>
    )
  }
}

export default CMEditor