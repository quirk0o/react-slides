import React from 'react'
import glamorous from 'glamorous'

const vBorders = (size) => ({borderLeft: `${size}px solid transparent`, borderRight: `${size}px solid transparent`})
const hBorders = (size) => ({borderTop: `${size}px solid transparent`, borderBottom: `${size}px solid transparent`})

const Arrow = glamorous.span(({left, right, up, down, size, color, clickable}) => ({
  width: 0,
  height: 0,
  ...(up || down ? vBorders(size) : hBorders(size)),
  [`border${(left && 'Right') || (right && 'Left') || (up && 'Bottom') || (down && 'Top')}`]: `${size}px solid ${color}`,
  cursor: clickable ? 'pointer' : 'default'
}))

Arrow.propTypes = {}

export default Arrow
