import React from 'react'
import {Route} from 'react-router-dom'

import {Layout} from 'modules/layout'
import {Slide} from 'modules/slides'

const jsSlides = [
  {
    header: 'Function scope',
    description: '',
    code: require('!raw-loader!./examples/js/function')
  },
  {
    header: 'Closures',
    description: '',
    code: require('!raw-loader!./examples/js/closures')
  },
  {
    header: 'Bind',
    description: '',
    code: require('!raw-loader!./examples/js/bind')
  },
  {
    header: 'Let, Const',
    description: '',
    code: require('!raw-loader!./examples/js/letconst')
  },
  {
    header: 'Arrow functions',
    description: '',
    code: require('!raw-loader!./examples/js/arrow')
  },
  {
    header: 'String interpolation',
    description: '',
    code: require('!raw-loader!./examples/js/interpolation')
  },
  {
    header: 'Object destructuring',
    description: '',
    code: require('!raw-loader!./examples/js/destructuring')
  },
  {
    header: 'Default function arguments',
    description: '',
    code: require('!raw-loader!./examples/js/default-arguments')
  },
  {
    header: 'Spread operator',
    description: '',
    code: require('!raw-loader!./examples/js/spread')
  },
  {
    header: 'Classes',
    description: '',
    code: require('!raw-loader!./examples/js/class')
  }
]

const reactSlides = [
  {
    header: 'Stateless Component',
    description: '',
    code: require('!raw-loader!./examples/react/stateless')
  },
  {
    header: 'Stateful Component',
    description: '',
    code: require('!raw-loader!./examples/react/stateful')
  },
  {
    header: 'Uncontrolled input',
    description: '',
    code: require('!raw-loader!./examples/react/uncontrolled')
  },
  {
    header: 'Lifecycle Methods Example',
    description: '',
    code: require('!raw-loader!./examples/react/lifecycle')
  },
  {
    header: 'Lifecycle Methods Continued',
    description: '',
    code: require('!raw-loader!./examples/react/lifecycle-cd')
  },
  {
    header: 'Prop Types',
    description: '',
    code: require('!raw-loader!./examples/react/proptypes')
  },
  {
    header: 'Children',
    description: '',
    code: require('!raw-loader!./examples/react/children')
  },
  {
    header: 'Styles',
    description: '',
    code: require('!raw-loader!./examples/react/styles')
  },
  {}
]

const App = () => (
  <Layout>
    {jsSlides.map((slide, idx) => (
      <Route
        key={`js_${idx}`}
        exact
        path={`/js/${idx + 1}`}
        render={() => (
          <Slide
            id={idx + 1}
            maxId={jsSlides.length}
            {...slide}
          />
        )}
      />
    ))}
    {reactSlides.map((slide, idx) => (
      <Route
        key={`react_${idx}`}
        exact
        path={`/react/${idx + 1}`}
        render={() => (
          <Slide
            id={idx + 1}
            maxId={reactSlides.length}
            {...slide}
          />
        )}
      />
    ))}
  </Layout>
)

export default App
