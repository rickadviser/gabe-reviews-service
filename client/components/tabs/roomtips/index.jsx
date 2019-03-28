import React, { Component } from 'react';
import TabHeader from '../../TabHeader';

class RoomTips extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <TabHeader title="Room Tips" buttonText="Finish Your Review" />
        <div>
          <p>Content</p>
        </div>
      </React.Fragment>
    );
  }
}

export default RoomTips;
