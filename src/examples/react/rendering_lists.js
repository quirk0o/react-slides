const MyList = ({items}) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
)
/*
 * A "key" is a special string attribute you need to include when creating lists of elements.
 * Keys help React identify which items have changed, are added, or are removed.
 * Keys should be given to the elements inside the array to give the elements a stable identity
 */

return (
  <MyList
    items={[
      {id: 1, name: 'Item 1'},
      {id: 2, name: 'Item 2'}
    ]}
  />
)

/*
 * Task: Extract ListItem to a separate component.
 */
