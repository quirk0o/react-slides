const ComponentWithChildren = ({children}) => (
  <div>{children}</div>
)

return (
  <ComponentWithChildren>
    <p>Child 1</p>
    <p>Child 2</p>
  </ComponentWithChildren>
)