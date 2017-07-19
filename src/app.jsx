import React from 'react'
import {Route} from 'react-router-dom'

import {Layout} from 'modules/layout'
import {CMEditor} from 'modules/editor'
import {Slide} from 'modules/slides'

const App = () => (
  <Layout>
    <Route exact path="/" render={() => <h2>Hello World</h2>} />
    <Route exact path="/cm" render={() => <CMEditor />} />
    <Route
      exact
      path="/1"
      render={() =>
        <Slide
          header="Function scope, closures"
          description=""
          code={require('!raw-loader!./examples/function')}
          panes={['code', 'console']}
        />}
    />

    <Route
      exact
      path="/101"
      render={() =>
        <Slide
          header="Stateless Component"
          description=""
          code={require('!raw-loader!./examples/stateless')}
        />}
    />
    <Route
      exact
      path="/102"
      render={() =>
        <Slide
          header="Stateful Component"
          description=""
          code={require('!raw-loader!./examples/stateful')}
        />}
    />
    <Route
      exact
      path="/103"
      render={() =>
        <Slide
          header="Uncontrolled input"
          description=""
          code={require('!raw-loader!./examples/uncontrolled')}
        />}
    />

  </Layout>
)

export default App
