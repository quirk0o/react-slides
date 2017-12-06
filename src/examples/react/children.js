/*
 * A component receives a special prop from React called `children`. It contains all the React elements that were enclosed
 * by the component's tags. This way you can render arbitrary content within your component.
 */

const CloseButton = ({children}) => (
  <button>&#10006;&nbsp;{children}</button>
)

return (
  <CloseButton>Close this thing!</CloseButton>
)

/*
 * EXERCISE
 * ========
 * Create a list component that has a style of `list-style-type: square` and accepts the list items as children.
 */
