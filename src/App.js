import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent'

import classes from './App.css';



/* Lazy Loading */
const AsyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth')
})

const AsyncProvisionDataset = asyncComponent(() => {
  return import('./containers/ProvisionData/ProvisionData')
})

const AsyncCreateDataset = asyncComponent(() => {
  return import('./containers/CreateDataset/CreateDataset')
})

const AsyncCopyDataset = asyncComponent(() => {
  return import('./containers/CopyDataset/CopyDataset')
})


class App extends Component {
  render () {

    /* SIMILAR TO ROUTER-OUTLET */
    let routes = (
      // <Switch>
      <Route path='/' component={AsyncAuth} />
      // <Redirect />
      // </Switch>
    )

    // if(this.props.isAuthenticated)
    if (true) {
      routes = (
        <Switch>
          <Route path='/provision-dataset' component={AsyncProvisionDataset} />
          <Route path='/empty-dataset' component={AsyncCreateDataset} />
          <Route path='/copy-dataset' component={AsyncCopyDataset} />
          <Route path='/' component={AsyncAuth} />
          <Redirect to='/' />
        </Switch>
      )
    }

    return (
      <div>
        {routes}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     // isAuthenticated: state.authReducer.token !== null
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // onTryAutoSignup: () => dispatch(actionCreators.authCheckState())
//   };
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default withRouter(App)


