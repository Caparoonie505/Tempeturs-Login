import React from "react";
import "./styles.css";

class LoginNavComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navWrapper">
        <form>
          <div>
            <img
              src="https://uploads.codesandbox.io/uploads/user/fc4cbfc0-31ae-485b-8c23-243cd8e0de47/69ni-Purple%20Paw.png"
              height="50"
              width="50"
            />
            <h2>Tempeturs</h2>
            <h3> Not a member yet? </h3>
            <button class="button signupButton" type="button">
              {" "}
              Register{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginNavComponent;
