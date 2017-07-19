import React, {Component} from 'react'
import CodeMirror from 'react-codemirror'
import glamorous from 'glamorous'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/jsx/jsx'
import './cm-editor.scss'

import Preview from './preview'
import Console from './console'

const {Div} = glamorous

class CMEditor extends Component {
  constructor(...args) {
    super(...args)
    this.state = {code: this.props.initialValue || ''}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(code) { this.setState({code}) }

  render() {
    const {panes} = this.props

    return (
      <Div
        display="grid"
        gridTemplateColumns="50% 50%"
        gridTemplateRows="auto 250px"
        height="100%">
        {panes.includes('code')
          && <CodeMirror
            value={this.state.code}
            onChange={this.handleChange}
            options={{
              tabSize: 2,
              mode: 'jsx'
            }}
            autoFocus
          />
        }
        <Preview code={this.state.code} display={panes.includes('preview')} />
        {panes.includes('console') && <Console />}
      </Div>
    )
  }
}

CMEditor.defaultProps = {
  panes: ['code', 'preview', 'console']
}

export default CMEditor