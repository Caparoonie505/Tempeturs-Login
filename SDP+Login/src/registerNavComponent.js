import React from "react";
import "./styles.css";

class RegisterNavComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navWrapper">
        <form>
          <div>
            <br />
            <img
              src="https://uploads.codesandbox.io/uploads/user/fc4cbfc0-31ae-485b-8c23-243cd8e0de47/69ni-Purple%20Paw.png"
              height="50"
              width="50"
            />
            <h2>Tempeturs</h2>
            <h3> Already a Member? </h3>
            <button class="button signupButton" type="button">
              {" "}
              Login{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterNavComponent;
