/*
 * If you want to pass props to a child component you can either do so explicitly one by one or use the
 * spread operator.
 */

const DumbCloseButton = ({children, type, disabled}) => (
  // We forgot about `onClick`!
  <button type={type} disabled={disabled}>&#10006;&nbsp;{children}</button>
)

const CloseButton = ({children, ...props}) => (
  <button {...props}>&#10006;&nbsp;{children}</button>
)

return (
  <DumbCloseButton onClick={() => console.log('Closing!')}>Close this thing!</DumbCloseButton>
)

/*
 * EXERCISE
 * ========
 * Render the `CloseButton` component instead and see if the `onClick` works
 */
