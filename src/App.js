// import classes from './Footer.css'
import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent/asyncComponent'
import Aux from './hoc/Aux/Aux'

import Footer from './components/Navigation/Footer/Footer'
import Header from './components/Navigation/Header/Header'

import { connect } from 'react-redux';
import * as provisionActionCreators from './store/actions/index'



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
      <Aux>
        <Header />
        {routes}
        <Footer />
      </Aux>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     stepNumber: state.provisonReducer.stepNumber,
//     datasets: state.provisonReducer.datasets,
//     // isAuthenticated: state.authReducer.token !== null
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseStepper: () => dispatch(provisionActionCreators.increaseStepper(1)),
//   }
// }





// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default withRouter(App)


