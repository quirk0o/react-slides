const MyTypeCheckedComponent = ({text, number}) => (
  <p>{text} {number}</p>
)

MyTypeCheckedComponent.propTypes = {
  text: React.PropTypes.string.isRequired,
  number: React.PropTypes.number.isRequired
}

return <MyTypeCheckedComponent number="abc" />
