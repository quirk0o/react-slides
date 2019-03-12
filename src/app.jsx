import React from 'react'
import {Route} from 'react-router-dom'

import {GlossaryLink, HomeLink, Layout, Nav, NavLink} from 'modules/layout'
import {Slide} from 'modules/slides'

const jsSlides = [
  {
    header: 'Scope',
    description: (
      <div>
        <p><em>JavaScript has function scope: The scope changes inside functions. It does not change inside blocks
          (`if`, `while`, etc.)</em></p>
        <p>Variables declared within a JavaScript function, become <strong>local</strong> to the function. They can only
          be accessed within the function.
          A variable declared outside any function, becomes <strong>global</strong>. All scripts and functions in the
          application can access it.
          If there is both a local and global variable with the same name the local variable shadows the global
          variable.</p>
      </div>
    ),
    code: require('!raw-loader!./examples/js/scope')
  },
  {
    header: 'Hoisting',
    description: (
      <div>
        <p><em>All variables declared with `var` and all functions are ”hoisted” (raised) to the top of the
          current <strong>scope</strong>.</em></p>
        <p>That means if a variable is declared anywhere in the function body it is actually accessible from the
          beginning of the function.</p>
        <p>Remember that only <strong>declarations</strong> are hoisted but <strong>assignments</strong> are not.
          On the other hand, the whole definition is hoisted when it comes to functions</p>
      </div>
    ),
    code: require('!raw-loader!./examples/js/hoisting')
  },
  {
    header: 'Closures',
    description: (
      <div>
        <p><em>In JS every function has access to Lexical Scope which contains the function's local variables and a
          reference to the outer Lexical Scope (containing the function).</em></p>
        <p>When a function is called outside of it's Lexical Scope it remembers and can access the variables defined in
          it's Lexical Scope (even ones that are no longer accessible otherwise) - this is called
          a <strong>Closure</strong></p>
      </div>
    ),
    code: require('!raw-loader!./examples/js/closures')
  }
]

const modernJsSlides = [
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
    header: 'How you write pure HTML',
    description: '',
    code: require('!raw-loader!./examples/react/intro-html')
  },
  {
    header: 'How you write it in React',
    description: 'Components are the fundamental building blocks of React. Everything you build will be made up of chunks that encapsulate smaller pieces of your view.',
    code: require('!raw-loader!./examples/react/intro-react')
  },
  {
    header: 'Encapsulating view and logic',
    description: 'The logic and view in React are collocated inside components. This means you can reuse both the structure and behavior of a components across your application.',
    code: require('!raw-loader!./examples/react/intro-logic')
  },
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
    header: 'A component has to return a single element or array of elements',
    description: (
      <div>
        <p>Alternatively a special `Fragment` syntax can be used that is equivalent to returning an array of
          elements.</p>
        <p>This is useful for rendering some elements e.g. table rows that cannot contain divs - they can be extracted
          into a separate component without creating an invalid structure.</p>
      </div>
    ),
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
          <li>You need to focus an input or use other DOM APIs.</li>
          <li>You need to use the API of a component from a library you're using.</li>
          <li>You need to provide compatibility with legacy (aka. jQuery) solutions.</li>
        </ul>
      </div>
    ),
    code: require('!raw-loader!./examples/react/refs')
  },
  {
    header: 'Refs to Components',
    description: (
      <div>
        <p>You can also pass refs to components in order to all public methods declared on the component.</p>
        <p>Do not use this unless an external library is forcing you to.</p>
      </div>
    ),
    code: require('!raw-loader!./examples/react/component-refs')
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
    header: 'Flux',
    description: (
      <img src="https://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png" />
    ),
    panes: []
  },
  {
    header: 'Problems with state in React',
    description: '',
    code: require('!raw-loader!./examples/redux/god')
  },
  {
    header: 'Another way to manage state',
    description: '',
    code: require('!raw-loader!./examples/redux/intro')
  },
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
  },
  {
    header: 'Connect Exercise',
    description: '',
    code: require('!raw-loader!./examples/redux/connect-exercise')
  }
]

const glossarySlides = [
  {
    header: 'Scope',
    description: (
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: 24}}>
        <div>
          <h3>Block</h3>
          <p><em>Block scope is created within if statements, for statements, while statements, etc.</em></p> <p>that is
          every time you use curly braces (except for object literals).</p>
        </div>
        <div>
          <h3>Function</h3>
          <p><em>Function scope only exists within functions.</em></p> <p>Every type of function (both declared with the
          `function` keyword and arrow function) creates a new function scope</p>
        </div>
      </div>
    )
  },
  {
    header: 'Side Effects',
    description: ''
  },
  {
    header: 'Prototype',
    description: ''
  }
]

const createSlug = (name) => name.split(/\s/).map((word) => word.toLowerCase()).join('_')

const App = () => (
  <Layout>
    <Route
      exact
      path="/"
      render={() => (
        <Nav>
          <NavLink to="/js/1">JavaScript Refresher</NavLink>
          <NavLink to="/modern_js/1">Modern JavaScript</NavLink>
          <NavLink to="/react/1">React</NavLink>
          <NavLink to="/redux/1">Redux</NavLink>
        </Nav>
      )}
    />
    <Route path="/(.+)" render={() => (
      <>
        <HomeLink key="home-link" />
        <GlossaryLink key="glossary-link" />
      </>
    )} />
    {jsSlides.map((slide, idx) => (
      <Route
        key={`js_${idx}`}
        exact
        path={`/js/${idx + 1}`}
        render={() => (
          <Slide
            id={`js_${idx}`}
            maxId={jsSlides.length}
            prevPath={idx === 0 ? null : `/js/${idx}`}
            nextPath={idx + 1 >= jsSlides.length ? `/modern_js/1` : `/js/${idx + 2}`}
            panes={['code', 'console']}
            {...slide}
          />
        )}
      />
    ))}
    {modernJsSlides.map((slide, idx) => (
      <Route
        key={`modern_js_${idx}`}
        exact
        path={`/modern_js/${idx + 1}`}
        render={() => (
          <Slide
            id={`modern_js_${idx}`}
            maxId={modernJsSlides.length}
            prevPath={idx === 0 ? `/js/${jsSlides.length}` : `/modern_js/${idx}`}
            nextPath={idx + 1 >= modernJsSlides.length ? `/react/1` : `/modern_js/${idx + 2}`}
            panes={['code', 'console']}
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
            id={`react_${idx}`}
            maxId={reactSlides.length}
            prevPath={idx === 0 ? `/modern_js/${modernJsSlides.length}` : `/react/${idx}`}
            nextPath={idx + 1 >= reactSlides.length ? `/redux/1` : `/react/${idx + 2}`}
            panes={['code', 'console', 'preview']}
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
            id={`redux_${idx}`}
            maxId={reduxSlides.length}
            prevPath={idx === 0 ? `/react/${reactSlides.length}` : `/redux/${idx}`}
            nextPath={idx + 1 >= reduxSlides.length ? null : `/redux/${idx + 2}`}
            panes={['code', 'console', 'preview']}
            {...slide}
          />
        )}
      />
    ))}

    <Route
      exact
      path="/glossary"
      render={() => (
        <Nav>
          {glossarySlides.map((slide) =>
            <NavLink key={createSlug(slide.header)}
                     to={`/glossary/${createSlug(slide.header)}`}>{slide.header}</NavLink>)}
        </Nav>
      )}
    />
    {glossarySlides.map((slide, idx) => (
      <Route
        key={`glossary-${idx}`}
        path={`/glossary/${createSlug(slide.header)}`}
        render={() => <Slide {...slide} panes={[]} />} />
    ))}
  </Layout>
)

export default App
