import React, {Component} from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2'
import glamorous from 'glamorous'
import chroma from 'chroma-js'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/jsx/jsx'
import './cm-editor.scss'

import Preview from './preview'
import Console from './console'
import BoxButton from 'modules/editor/components/box-button'

class CMEditor extends Component {
  constructor(...args) {
    super(...args)
    this.state = {code: localStorage.getItem(this.props.id) || this.props.initialValue || ''}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(editor, data, code) {
    this.setState({code})
  }

  handleBlur = () => {
    localStorage.setItem(this.props.id, this.state.code)
  }

  handleRun = () => {
    this.preview.run()
  }

  handleReset = () => {
    localStorage.removeItem(this.props.id)
    this.setState({code: this.props.initialValue || ''})
  }

  render() {
    const {panes, className} = this.props

    return (
      <div className={className}>
        {panes.includes('code')
        && <CodeMirror
          value={this.state.code}
          onBeforeChange={this.handleChange}
          onBlur={this.handleBlur}
          options={{
            tabSize: 2,
            mode: 'jsx',
            lineWrapping: true,
            theme: 'default'
          }}
          autoFocus
        />
        }
        <Preview
          ref={(ref) => this.preview = ref}
          code={this.state.code}
          display={panes.includes('preview')}
        />
        {panes.includes('console') && <Console />}
        <BoxButton onClick={this.handleReset} right={120}>Reset</BoxButton>
        <BoxButton onClick={this.handleRun}>Run</BoxButton>
      </div>
    )
  }
}

CMEditor.defaultProps = {
  panes: ['code', 'preview', 'console']
}

export default glamorous(CMEditor)(
  {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '70% 30%',
    height: '100%',
    '> *:nth-child(3)': {gridColumnEnd: 'span 2'},
    '> *': {
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
      background: chroma('#eeeeee').alpha(0.5).css(),
      border: '1px solid #ddd',
      padding: 20
    }
  },
  ({panes}) => !panes.includes('preview') ? ({'> *:nth-child(1)': {gridColumnEnd: 'span 2'}}) : ({})
)
