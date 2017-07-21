import React from 'react'
import {Route} from 'react-router-dom'

import {Layout} from 'modules/layout'
import {CMEditor} from 'modules/editor'
import {Slide} from 'modules/slides'

const App = () => (
  <Layout>
    <Route
      exact
      path="/js/1"
      render={() =>
        <Slide
          id={1}
          maxId={9}
          header="Function scope, closures"
          description=""
          code={require('!raw-loader!./examples/js/function')}
        />}
    />
    <Route
      exact
      path="/js/2"
      render={() =>
        <Slide
          id={2}
          maxId={9}
          header="Bind"
          description=""
          code={require('!raw-loader!./examples/js/bind')}
        />}
    />
    <Route
      exact
      path="/js/3"
      render={() =>
        <Slide
          id={3}
          maxId={9}
          header="Let, Const"
          description=""
          code={require('!raw-loader!./examples/js/letconst')}
        />}
    />
    <Route
      exact
      path="/js/4"
      render={() =>
        <Slide
          id={4}
          maxId={9}
          header="Arrow functions"
          description=""
          code={require('!raw-loader!./examples/js/arrow')}
        />}
    />
    <Route
      exact
      path="/js/5"
      render={() =>
        <Slide
          id={5}
          maxId={9}
          header="String interpolation"
          description=""
          code={require('!raw-loader!./examples/js/interpolation')}
        />}
    />
    <Route
      exact
      path="/js/6"
      render={() =>
        <Slide
          id={6}
          maxId={9}
          header="Object destructuring"
          description=""
          code={require('!raw-loader!./examples/js/destructuring')}
        />}
    />
    <Route
      exact
      path="/js/7"
      render={() =>
        <Slide
          id={7}
          maxId={9}
          header="Default function arguments"
          description=""
          code={require('!raw-loader!./examples/js/default-arguments')}
        />}
    />
    <Route
      exact
      path="/js/8"
      render={() =>
        <Slide
          id={8}
          maxId={9}
          header="Spread operator"
          description=""
          code={require('!raw-loader!./examples/js/spread')}
        />}
    />
    <Route
      exact
      path="/js/9"
      render={() =>
        <Slide
          id={9}
          maxId={9}
          header="Classes"
          description=""
          code={require('!raw-loader!./examples/js/class')}
        />}
    />

    <Route
      exact
      path="/react/1"
      render={() =>
        <Slide
          id={1}
          maxId={8}
          header="Stateless Component"
          description=""
          code={require('!raw-loader!./examples/react/stateless')}
        />}
    />
    <Route
      exact
      path="/react/2"
      render={() =>
        <Slide
          id={2}
          maxId={8}
          header="Stateful Component"
          description=""
          code={require('!raw-loader!./examples/react/stateful')}
        />}
    />
    <Route
      exact
      path="/react/3"
      render={() =>
        <Slide
          id={3}
          maxId={8}
          header="Uncontrolled input"
          description=""
          code={require('!raw-loader!./examples/react/uncontrolled')}
        />}
    />
    <Route
      exact
      path="/react/4"
      render={() =>
        <Slide
          id={4}
          maxId={8}
          header="Lifecycle Methods Example"
          description=""
          code={require('!raw-loader!./examples/react/lifecycle')}
        />}
    />
    <Route
      exact
      path="/react/5"
      render={() =>
        <Slide
          id={5}
          maxId={8}
          header="Lifecycle Methods Continued"
          description=""
          code={require('!raw-loader!./examples/react/lifecycle-cd')}
        />}
    />
    <Route
      exact
      path="/react/6"
      render={() =>
        <Slide
          id={6}
          maxId={8}
          header="Prop Types"
          description=""
          code={require('!raw-loader!./examples/react/proptypes')}
        />}
    />
    <Route
      exact
      path="/react/7"
      render={() =>
        <Slide
          id={7}
          maxId={8}
          header="Children"
          description=""
          code={require('!raw-loader!./examples/react/children')}
        />}
    />
    <Route
      exact
      path="/react/8"
      render={() =>
        <Slide
          id={8}
          maxId={8}
          header="Styles"
          description=""
          code={require('!raw-loader!./examples/react/styles')}
        />}
    />


  </Layout>
)

export default App
