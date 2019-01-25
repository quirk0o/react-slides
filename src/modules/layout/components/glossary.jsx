import React from 'react'
import {Link} from 'react-router-dom'
import glamorous from 'glamorous'

const GlossaryIcon = () => (
  <svg x="0px"
       y="0px"
       height={32}
       viewBox="0 0 48 60"
       enableBackground="new 0 0 48 48"
       style={{fill: 'var(--color-primary)'}}
  >
    <g>
      <path d="M7.2,39.1c1-0.9,2.4-1.4,3.8-1.4h29.7V0.5H12.4c-2.8,0-5.1,2.3-5.1,5.1L7.2,39.1L7.2,39.1z M14.3,6.3h19.4v2.2H14.3V6.3z    M14.3,15.6h19.4v2.2H14.3V15.6z" />
      <path
        d="M40.7,44.8H12.8v-2.2h27.9v-2.7H11.1c-2.1,0-3.8,1.7-3.8,3.8s1.7,3.8,3.8,3.8h29.7v-2.7H40.7z" />
    </g>
  </svg>
)

const UnstyledGlossaryLink = ({className}) => <Link to="/glossary" className={className}><GlossaryIcon /></Link>

export const GlossaryLink = glamorous(UnstyledGlossaryLink)({
  position: 'absolute',
  left: 64,
  top: 24
})
