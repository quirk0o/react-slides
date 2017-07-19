const MyStatelesComponent = ({name, items}) => (
  <div>
    <p>Hello {name}</p>
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
)

return (
  <MyStatelesComponent
    name="Bob"
    items={[
      {id: 1, name: 'Item 1'},
      {id: 2, name: 'Item 2'}
    ]}
  />
)