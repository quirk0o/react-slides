const MyTypeCheckedComponent = ({text, number}) => (
  <p>{text} {number}</p>
)

MyTypeCheckedComponent.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}

return <MyTypeCheckedComponent number="abc" />
