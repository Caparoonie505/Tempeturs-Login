import React from "react";
import "./styles.css";

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navWrapper">
        <form>
          <div>
            <h2>Tempeturs</h2>
            <h3> Not a member yet? </h3>
            <button class="button signupButton" type="button">
              {" "}
              SIGNUP{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NavComponent;
