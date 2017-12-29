import React from 'react'
import glamorous from 'glamorous'

const StyledLayout = glamorous.div({
  background: '#f9f9f9',
  height: '100%',
  width: '100%'
})
StyledLayout.displayName = 'StyledLayout'

const Layout = ({children}) => (
  <StyledLayout>
    {children}
  </StyledLayout>
)

export default Layout
