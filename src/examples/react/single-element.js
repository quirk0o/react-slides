/*
 * This doesn't work
 */

/*
const MultipleItems = () => (
  <p>First line</p>
  <p>Second line</p>
)
*/

const RegularItems = () => (
  <div>
    <td>First</td>,
    <td>Second</td>
  </div>
)

const MultipleItems = () => [
  <td>First</td>,
  <td>Second</td>
]

const MultipleItemsFragment = () => (
  <React.Fragment>
    <td>First</td>
    <td>Second</td>
  </React.Fragment>
)

const MultipleItemsShorthand = () => (
  <>
    <td>First</td>
    <td>Second</td>
  </>
)

return <tr><MultipleItemsShorthand /></tr>
// return <tr><RegularItems /></tr>
