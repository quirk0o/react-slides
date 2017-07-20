import React from 'react'
import glamorous from 'glamorous'
import chroma from 'chroma-js'

const Button = glamorous.button({
  padding: 10,
  margin: 5,
  fontFamily: '"Lato", sans-serif',
  fontSize: 12,
  minWidth: 100,
  boxShadow: 'none',
  border: 'none',
  background: '#E0E1E3',
  color: chroma('black').alpha(0.6),
  cursor: 'pointer',
  '&:hover, &:focus': {background: chroma('#E0E1E3').darken(0.3).css()}
})

export default Button