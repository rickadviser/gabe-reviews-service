import React, { Component } from "react";
import styles from "./css/test.css";

class ReviewInfo extends Component {
  render() {
    return (
      <div>
        <h1 className={`${styles.test} ${styles.test2}`}>test</h1>
      </div>
    );
  }
}

export default ReviewInfo;
