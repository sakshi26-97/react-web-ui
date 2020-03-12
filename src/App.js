import React, { Component } from 'react';
import classes from './App.css';

// import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent'
import Logo from './components/UI/Logo/Logo'

/* Lazy Loading */
// const Async_____ = asyncComponent(() => {
//   return import('....')
// })

class App extends Component {
  render () {
    return (
      <div>
        <p>React</p>
        <Logo />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // isAuthenticated: state.authReducer.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onTryAutoSignup: () => dispatch(actionCreators.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


