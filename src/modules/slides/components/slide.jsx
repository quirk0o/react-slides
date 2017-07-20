import React, {PropTypes} from 'react'
import CMEditor from 'modules/editor/components/cm-editor'
import glamorous from 'glamorous'
import {Header} from 'modules/base'

const Slide = ({header, description, code, panes, className}) => (
  <div className={className}>
    <Header>{header}</Header>
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
  padding: 100,
  paddingBottom: 200,
  '> h2': {flex: 'none'},
  '> p': {flex: 'none'},
  '> div': {flex: 'auto'},
})