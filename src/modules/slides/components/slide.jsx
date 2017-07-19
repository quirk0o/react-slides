import React, {PropTypes} from 'react'
import CMEditor from 'modules/editor/components/cm-editor'
import glamorous from 'glamorous'

const Slide = ({header, description, code, panes, className}) => (
  <div className={className}>
    <h2>{header}</h2>
    <p>{description}</p>
    <CMEditor initialValue={code} panes={panes}/>
  </div>
)

const PaneType = PropTypes.oneOf(['code', 'preview', 'console'])

Slide.propTypes = {
  panes: PropTypes.arrayOf(PaneType)
}

export default glamorous(Slide)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: 25,
  boxSizing: 'border-box',
  '> h2': {flex: 'none'},
  '> p': {flex: 'none'},
  '> div': {flex: 'auto'},
})