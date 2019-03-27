import React, { Component } from "react";
import ReactDOM from "react-dom";

import ReviewInfo from "./components/ReviewInfo.jsx";

class App extends Component {
  state = {
    name: "Gabe"
  };

  render() {
    return (
      <div>
        <ReviewInfo />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
