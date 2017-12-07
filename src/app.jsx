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
        <p>Variables declared within a JavaScript function, become <strong>local</strong> to the function. They can only
          be accessed within the function.</p>
        <p>A variable declared outside any function, becomes <strong>global</strong>. All scripts and functions in the
          application can access it.</p>
        <p>If there is both a local and global variable with the same name the local variable shadows the global
          variable.</p>
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
    description: (
      <div>
        <p>An arrow function expression has a shorter syntax than a function expression.</p>
        <p>It does not bind its own this, arguments.</p>
        <p>These function expressions are best suited for non-method functions, and they cannot be used as
          constructors.</p>
      </div>
    ),
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
    description: 'It\'s like destructuring but for arrays!',
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
    header: 'Basic component',
    description: 'You use JSX to define your components. JSX is a mix of JS and HTML but it compiles into JS underneath.',
    code: require('!raw-loader!./examples/react/stateless')
  },
  {
    header: 'Styling a component',
    description: (
      <div>
        <p>You can provide an existing CSS class using the `className` prop.</p>
        <p>You can define an inline style with an object with keys as camelCased CSS properties.</p>
        <p>Integer values automatically get converted to 'px'.</p>
      </div>
    ),
    code: require('!raw-loader!./examples/react/styles')
  },
  {
    header: 'Composing components',
    description: 'The main idea behind React is to compose your application of reusable chunks.',
    code: require('!raw-loader!./examples/react/composition')
  },
  {
    header: 'Rendering Lists',
    description: '',
    code: require('!raw-loader!./examples/react/rendering-lists')
  },
  {
    header: 'Different ways of declaring components',
    description: '',
    code: require('!raw-loader!./examples/react/declaring')
  },
  {
    header: 'A component has to return a single element',
    description: '',
    code: require('!raw-loader!./examples/react/single-element')
  },
  {
    header: 'Stateful Component',
    description: '',
    code: require('!raw-loader!./examples/react/stateful')
  },
  {
    header: 'Controlled input',
    description: 'A controlled input means that you take control of managing the input\'s value.',
    code: require('!raw-loader!./examples/react/controlled-input')
  },
  {
    header: 'Refs',
    description: (
      <div>
        <p>Refs allow you to manipulate the underlying DOM Elements. Use this feature very sparingly!</p>
        <p>This might be useful in the following scenarios:</p>
        <ul>
          <li>You need to focus an input.</li>
          <li>You need to use the API of the DOM element/component from a library you're using.</li>
          <li>You need to provide compatibility with legacy (aka. jQuery) solutions.</li>
        </ul>
      </div>
    ),
    code: require('!raw-loader!./examples/react/uncontrolled')
  },
  {
    header: 'Uncontrolled input',
    description: 'An uncontrolled input means that the inputs value is managed internally by the input. You can read/write the value with refs.',
    code: require('!raw-loader!./examples/react/uncontrolled')
  },
  {
    header: 'Lifecycle Methods',
    description: (
      <div>
        Please open <a href="https://reactarmory.com/guides/lifecycle-simulators" target="_blank">this link</a>.<br />
        <a href="http://busypeoples.github.io/post/react-component-lifecycle/" target="_blank">Lifecycle</a>.
      </div>
    ),
    panes: []
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
    header: 'Passing props to children',
    description: '',
    code: require('!raw-loader!./examples/react/passing-props')
  }
]

const reduxSlides = [
  {
    header: 'Basic Redux',
    description: '',
    code: require('!raw-loader!./examples/redux/base')
  },
  {
    header: 'Redux with React',
    description: '',
    code: require('!raw-loader!./examples/redux/react')
  },
  {
    header: 'Connect',
    description: '',
    code: require('!raw-loader!./examples/redux/connect')
  }
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
    {reduxSlides.map((slide, idx) => (
      <Route
        key={`redux_${idx}`}
        exact
        path={`/redux/${idx + 1}`}
        render={() => (
          <Slide
            id={idx + 1}
            maxId={reduxSlides.length}
            {...slide}
          />
        )}
      />
    ))}

  </Layout>
)

export default App
