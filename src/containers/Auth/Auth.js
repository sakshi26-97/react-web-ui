import React, { Component } from 'react'
import classes from './Auth.css'
import { GoogleLogin } from 'react-google-login';
import Button from '../../components/UI/Button/Button'
import { connect } from 'react-redux';
import * as authActionCreators from '../../store/actions/index'
import { Redirect } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux'


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faSearch} />

class Auth extends Component {

  componentDidMount () {
    console.log('componentDidMount', this.props.authRedirectPath);
    if (this.props.authRedirectPath === '/auth') {
      this.props.onSetAuthRedirectPath('/provision-dataset')
    }
  }

  render () {
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />
    }

    let bodyToRender = (
      <div className={classes.Auth}>

        {authRedirect}

        <GoogleLogin
          clientId=""
          render={renderProps => (
            <Button clicked={renderProps.onClick} 
            // disabled={renderProps.disabled}
            >
              SignIn With Google</Button>
          )}
          onSuccess={this.props.onLoginSuccessResponse}
          onFailure={this.props.onLoginFailureResponse}
          cookiePolicy={'single_host_origin'} />

      </div>
    )

    // if (this.props.loading) {
    //   bodyToRender = <div className={["loading loading-lg", classes.Auth].join(' ')}></div>
    // }

    return (
      <Aux>
        {bodyToRender}
      </Aux>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.accessToken !== null && state.authReducer.idToken !== null,
    authRedirectPath: state.authReducer.authRedirectPath,
    loading: state.authReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoginSuccessResponse: (userObj) => dispatch(authActionCreators.loginSuccessResponse(userObj)),
    onLoginFailureResponse: (errorResponse) => dispatch(authActionCreators.loginFailureResponse(errorResponse)),
    onSetAuthRedirectPath: (path) => dispatch(authActionCreators.setAuthRedirectPath(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
