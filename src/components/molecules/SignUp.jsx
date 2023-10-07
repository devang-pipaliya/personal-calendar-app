import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

const SignUp = props => {
    // const [user, setUser] = useState([])
    // const googleLogin = useGoogleLogin({
    //     onSuccess: (codeResponse) => setUser(codeResponse),
    //     onError: (error) => console.log('Login Failed:', error)
    // });

    // console.log("user", user)
  return (
      <>
          <form className="sign-in-form">
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                  <i className='bx bxs-lock-alt'></i>
                  <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or sign in with social platforms</p>
              <div className="social-media">
                  {/* add google oauth  */}
                  <GoogleLogin
                      onSuccess={credentialResponse => {
                          console.log("token", credentialResponse);
                      }}
                      onError={() => {
                          console.log('Login Failed');
                      }}
                  />;
                  <a href="#" className="social-icon">
                      <i className='bx bxl-microsoft'></i>
                  </a>
              </div>
          </form>
      </>
  )
}

SignUp.propTypes = {}

export default SignUp