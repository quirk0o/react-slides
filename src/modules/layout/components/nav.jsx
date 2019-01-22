import React from 'react'
import glamorous from 'glamorous'
import {Link} from 'react-router-dom'

export const Nav = glamorous.nav({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  height: '100%',
  margin: 'auto',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center'
})

export const NavLink = glamorous(Link)({
  display: 'block',
  padding: 24,
  marginBottom: 16,
  background: 'white',
  border: '2px solid var(--color-primary)',
  width: '100%',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: 'var(--color-primary)',
  '&:hover': {
    background: 'hsl(256, 10%, 95%)'
  }
})
