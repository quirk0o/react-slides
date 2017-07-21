import React, {PropTypes} from 'react'
import glamorous from 'glamorous'

import {Header} from 'modules/base'
import CMEditor from 'modules/editor/components/cm-editor'
import Arrow from './arrow'
import {Link} from 'react-router-dom'

const NavArrow = glamorous(Arrow)({
  position: 'absolute',
  top: 'calc(50% - 30px)'
},
  ({left, right}) => ({
    [(left && 'left') || (right && 'right')]: '20px'
  })
)

const Slide = ({header, description, code, panes, id, maxId, className}) => (
  <div className={className}>
    {id > 1 && <Link to={`${id - 1}`}><NavArrow left size={30} color="#ddd" clickable /></Link>}
    <Header>{header}</Header>
    <p>{description}</p>
    <CMEditor initialValue={code} panes={panes} />
    {id < maxId && <Link to={`${id + 1}`}><NavArrow right size={30} color="#ddd" clickable /></Link>}
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
  '> div': {flex: 'auto'}
})