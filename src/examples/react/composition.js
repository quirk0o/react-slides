const Navbar = ({pageTitle}) => (
  <nav style={{border: '1px solid black', padding: '20px'}}>
    <h1>{pageTitle}</h1>
  </nav>
)

const Section = ({title, text}) => (
  <section style={{border: '1px solid black', padding: '20px'}}>
    <h2>{title}</h2>
    <p>{text}</p>
  </section>
)

const App = ({pageTitle}) => (
  <div style={{border: '1px solid black', padding: '20px'}}>
    {/* You can pass props from parent to child */}
    <Navbar pageTitle={pageTitle} />
    <Section title="Composition" text="You can go on indefinitely" />
    <Section title="Components" text="Make them reusable!" />
  </div>
)

return <App pageTitle="React Workshop" />

/*
 * EXERCISE
 * ========
 * 1. Add a `Footer` component and add it to the app
 * 2. Extract `SectionTitle` and `SectionText` components
 */
