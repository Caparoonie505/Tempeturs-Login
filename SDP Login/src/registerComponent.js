import React from "react";
import "./styles.css";

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="join_wrapper">
        <form>
          <h1>Welcome Aboard!</h1>
          <p>Please enter your information</p>
          <div className="field-input-wrapper">
            <label htmlFor="name" />
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="join_Component"
            />
          </div>
          <div className="field-input-wrapper">
            <label htmlFor="email" />
            <input
              type="email"
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
        </form>
        <button class="button registerButton">Register</button>
        <button class="button facebookButton">Register with Facebook</button>
        <button class="button googleButton">Register with Google</button>
      </div>
    );
  }
}

export default RegisterComponent;
