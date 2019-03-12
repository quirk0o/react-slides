import React from 'react'
import PropTypes from 'prop-types'
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

const Description = glamorous.div({
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 24,
  lineHeight: 1.5
})

const Slide = ({header, description, code, panes, id, maxId, nextPath, prevPath, className}) => (
  <div className={className}>
    {prevPath && <Link to={prevPath}><NavArrow left size={30} color="#ddd" clickable /></Link>}
    <Header>{header}</Header>
    <Description>{typeof description === 'string' ? <p>{description}</p> : description}</Description>
    <CMEditor initialValue={code} panes={panes} id={id} />
    {nextPath && <Link to={nextPath}><NavArrow right size={30} color="#ddd" clickable /></Link>}
  </div>
)

const PaneType = PropTypes.oneOf(['code', 'preview', 'console'])

Slide.propTypes = {
  panes: PropTypes.arrayOf(PaneType)
}

export default glamorous(Slide)({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: '4%',
  '> h2': {flex: 'none'},
  '> div:first-of-type': {flex: 'none'},
  '> div:nth-of-type(2)': {flex: 'auto'}
})
