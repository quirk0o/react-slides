const CardHeader = (props) => (
  <div className=".card-header">
    <div className=".card-title">{props.title}</div>
    <div className=".card-subtitle">{props.subtitle}</div>
  </div>
)

const CardSection = (props) => (
  <div className=".card-content-section">
    {props.content}
  </div>
)
const CardContent = (props) => (
  <div className=".card-content">
    {props.children}
  </div>
)

const CardActions = (props) => (
  <div className=".card-actions">
    <button className=".card-action .card-action-primary">Go</button>
    <button className=".card-action .card-action-secondary">Cancel</button>
  </div>
)

const Card = (props) => (
  <div className=".card .card-blue .card-large">
    <CardHeader title={props.title} subtitle={props.subtitle} />
    <CardContent>
      <CardSection content="Section 1" />
      <CardSection content="Section 2" />
      <CardSection content="Section 3" />
    </CardContent>
    <CardActions />
  </div>
)

return (
  <div>
    <Card title="Card 1" subtitle="Awesome card" />
    <Card title="Card 2" subtitle="Another awesome card" />
  </div>
)
