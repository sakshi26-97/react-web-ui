import React, { Component } from 'react'
import SocialLogin from 'react-social-login'

class SocialButton extends Component {

  render () {
    return (
      <button className='btn btn-primary' onClick={this.props.triggerLogin} {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default SocialLogin(SocialButton);


/* should utilize in this manner in other component */

// import SocialButton from './SocialButton'
// handleSocialLogin = (user) => {
//   console.log(user)
// }

// handleSocialLoginFailure = (err) => {
//   console.error(err)
// }

{/* <SocialButton
          provider='google'
          appId=''
          onLoginSuccess={this.handleSocialLogin}
          onLoginFailure={this.handleSocialLoginFailure}>
          SignIn With Google
        </SocialButton> */}
