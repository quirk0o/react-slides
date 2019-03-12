const Panel = (props) => (
  <div>
    <div>{props.header}</div>
    <button onClick={props.onShow}>Show</button>
    <div style={{display: props.open ? 'block' : 'none'}}>
      <p>{props.content}</p>
      <button onClick={props.onHide}>Collapse</button>
    </div>
  </div>
)

class Accordion extends React.Component {
  state = {shown: null}

  handleShow = (idx) => () => this.setState({shown: idx})
  handleHide = () => this.setState({shown: null})

  render() {
    return (
      <div>
        <Panel
          header="First Panel"
          content="Some important content"
          open={this.state.shown === 0}
          onShow={this.handleShow(0)}
          onHide={this.handleHide}
        />
        <Panel
          header="Second Panel"
          content="Cats are amazing"
          open={this.state.shown === 1}
          onShow={this.handleShow(1)}
          onHide={this.handleHide}
        />
        <Panel
          header="Third Panel"
          content="React is also great"
          open={this.state.shown === 2}
          onShow={this.handleShow(2)}
          onHide={this.handleHide}
        />
      </div>
    )
  }
}

return <Accordion />
