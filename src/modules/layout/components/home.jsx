import React from 'react'
import glamorous from 'glamorous'
import {Link} from 'react-router-dom'

const HomeIcon = () => (
  <svg viewBox="0 0 311 297.5"
       x="0px"
       y="0px"
       width={32}
       fillRule="evenodd"
       clipRule="evenodd">
    <g>
      <path style={{fill: 'var(--color-primary)'}}
            d="M14 125l33 -24 0 124c0,7 6,13 13,13l54 0c7,0 13,-6 13,-13l0 -70c0,-7 6,-13 13,-13l31 0c7,0 13,6 13,13l0 70c0,7 6,13 13,13l54 0c7,0 13,-6 13,-13l0 -124 34 24c5,4 17,-14 12,-18l-147 -105c-4,-3 -10,-3 -15,0l-147 105c-5,4 7,22 13,18z" />
    </g>
  </svg>
)

const UnstyledHomeLink = ({className}) => <Link to="/" className={className}><HomeIcon /></Link>

export const HomeLink = glamorous(UnstyledHomeLink)({
  position: 'absolute',
  left: 24,
  top: 24
})
