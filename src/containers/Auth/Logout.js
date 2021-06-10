import React, { Component } from 'react'
import * as authActionCreators from '../../store/actions/index'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Logout extends Component {

  componentDidMount () {
    this.props.onLogout()
    this.props.onSetAuthRedirectPath('/auth');
  }

  render () {
    return <Redirect to='/auth' />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(authActionCreators.logout()),
    onSetAuthRedirectPath: (path) => dispatch(authActionCreators.setAuthRedirectPath(path))
  };
};


export default connect(null, mapDispatchToProps)(Logout)
