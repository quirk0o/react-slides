import React from 'react'
import {Route} from 'react-router-dom'

import {Layout} from 'modules/layout'
import {CMEditor} from 'modules/editor'

const App = () => (
  <Layout>
    <Route exact path="/" render={() => <h2>Hello World</h2>} />
    <Route exact path="/cm" render={() => <CMEditor />} />
  </Layout>
)

export default App
