import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import LoginComponent from "./loginComponent";
import RegisterComponent from "./registerComponent";
import LoginNavComponent from "./loginNavComponent";
import RegisterNavComponent from "./registerNavComponent";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "login",
      navTab: "login"
    };
  }

  handleActiveTab = name => event => {
    this.setState({ activeTab: name });
  };

  render() {
    const { activeTab } = this.state;
    const { navTab } = this.state;
    let joinComponent =
      activeTab === "login" ? <LoginComponent /> : <RegisterComponent />;
    let appendNavComponent =
      activeTab === "login" ? <LoginNavComponent /> : <RegisterNavComponent />;

    return (
      <div className="segmentWrapper">
        <table>
          <tr>
            <td>
              <div className="formWrapper">{joinComponent}</div>
            </td>
            <td className="navTableData">
              <div className="navigationWrapper">
                <table className="loginRegisterSelector">
                  <tr>
                    <table>
                      <td>
                        <div
                          onClick={this.handleActiveTab("login")}
                          className={classNames("login", {
                            active: activeTab === "login"
                          })}
                        >
                          Already a Member?
                        </div>
                      </td>
                      <td>
                        <div
                          onClick={this.handleActiveTab("register")}
                          className={classNames("register", {
                            active: activeTab === "register"
                          })}
                        >
                          Not a Member yet?
                        </div>
                      </td>
                    </table>
                  </tr>
                  <tr>{appendNavComponent}</tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
  //end of App class
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
