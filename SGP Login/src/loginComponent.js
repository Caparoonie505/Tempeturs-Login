import React from "react";
import "./styles.css";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapperContainer">
        <table>
          <tr>
            <td>
              <div className="join_wrapper">
                <form>
                  <h1>Welcome Back!</h1>
                  <p>Login with your email</p>
                  <div className="field-input-wrapper">
                    <label htmlFor="email" />
                    <input
                      type="text"
                      id="email"
                      placeholder="Email"
                      className="join_Component"
                    />
                  </div>
                  <div className="field-input-wrapper">
                    <label htmlFor="password" />
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="join_Component"
                    />
                  </div>
                  <a class="forgotPassword" href="#">
                    Forgot your password?
                  </a>
                  <button class="button loginButton">Login</button>
                  <button class="button facebookButton">
                    Login with Facebook
                  </button>
                  <button class="button googleButton">Login with Google</button>
                </form>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default LoginComponent;
