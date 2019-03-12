function MyComponent(props) {
  return (
    <div>
      {/* To evaluate JS code in JSX you have to surround it with curly braces */}
      {/* That includes comments too ;) */}
      <p>Hello {props.name}</p>
    </div>
  )
}

/*
 * To pass an argument to a component you use PROPS as below (name="Bob")
 * Props are analogous to the HTML attributes in the React world
 * They are passed as a single object to the component (function)
 */
return (
  <MyComponent name="Bob" />
)

/*
 * DISCLAIMER NOTE
 * ===============
 * The `return` above is a lie!
 * You cannot render things this way in the real world.
 * This is only for the purposes of this presentation so the code fragments can be interactive.
 *
 * How you render things in the real world:
 */

ReactDOM.render(<MyComponent name="Bob" />, document.getElementById('root'))

/*
 * where `root` is the if of the HTML element where the component will be inserted.
 */

/*
 * EXERCISE
 * ========
 * Change `MyComponent` to print a first and last name
 */
