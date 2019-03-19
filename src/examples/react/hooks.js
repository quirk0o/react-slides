/*
 * A regular component that displays a clock and updates on an interval
 * No Hooks here
 */

class Clock extends React.Component {
  state = {time: new Date()}

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({time: new Date()})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {time} = this.state
    return <div>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</div>
  }
}

/*
 * The same logic implemented with Hooks
 */
const useTime = () => {
  const [time, setTime] = React.useState(new Date())
  const updateTime = () => setTime(new Date())

  React.useEffect(() => {
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  })

  return time
}

const HookClock = () => {
  const time = useTime()
  return <div>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</div>
}

return <HookClock />
