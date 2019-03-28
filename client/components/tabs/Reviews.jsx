import React, { Component } from 'react';
import TabHeader from '../TabHeader';

class Reviews extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <TabHeader title="Reviews" buttonText="Finish Your Review" />
        <div>
          <p>Content</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Reviews;
