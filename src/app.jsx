import React from 'react'
import {Route} from 'react-router-dom'

import {Layout} from 'modules/layout'
import {Slide} from 'modules/slides'

const jsSlides = [
  {
    header: 'Function scope',
    description: (
      <div>
        <p>JavaScript has function scope: The scope changes inside functions.</p>
        <p>Variables declared within a JavaScript function, become <strong>local</strong> to the function. They can only be accessed within the function.</p>
        <p>A variable declared outside any function, becomes <strong>global</strong>. All scripts and functions in the application can access it.</p>
        <p>If there is both a local and global variable with the same name the local variable shadows the global variable.</p>
      </div>
    ),
    code: require('!raw-loader!./examples/js/function')
  },
  {
    header: 'Closures',
    description: 'Closure is when a function can remember and access its lexical scope even when it’s invoked outside its lexical scope.',
    code: require('!raw-loader!./examples/js/closures')
  },
  {
    header: 'Bind',
    description: 'The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.',
    code: require('!raw-loader!./examples/js/bind')
  },
  {
    header: 'Let, Const',
    description: 'We used to use var for everything but ES6 provides us with a better alternative.',
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
