import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    name: "Gabe"
  };

  render() {
    return (
      <div>
        {/* <ReviewInfo data={data} />
        <UserReviews data={data}/> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
