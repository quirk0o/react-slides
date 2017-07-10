import React from 'react'
import {Route} from 'react-router-dom'

import {Layout} from 'modules/layout'

const App = () => (
  <Layout>
    <Route exact path="/" render={() => <h2>Hello World</h2>} />
  </Layout>
)

export default App
