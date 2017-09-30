/* You can use a regular JavaScript function that accepts props as argument */
const MyArrowComponent = (props) => {
  return <div></div>
}

/* Same as */
const MyShortArrowComponent = (props) => <div></div>

/*
 * You can use a class that extends `React.Component`
 * It has to define a `render` method that returns the element definition
 * It has access to props via `this.props`
 */
class MyClassComponent extends React.Component {
  // the constructor is optional (its use will be explained later)
  constructor(props) {
    super(props)
  }

  render() {
    return <div></div>
  }
}

/*
 * EXERCISE
 * ========
 * Rewrite the `HelloComponent` to a class
 */

const HelloComponent = ({name}) => (
  <div>
    <p>Hello {name}</p>
  </div>
)

return (
  <HelloComponent name="Bob" />
)