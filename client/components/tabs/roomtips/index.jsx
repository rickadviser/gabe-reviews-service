import React, { Component } from 'react';
import TabHeader from '../../TabHeader';

import { upper__wrapper } from '../../css/main.scss';

class RoomTips extends Component {
  state = {};

  render() {
    return (
      <>
        <div className={upper__wrapper}>
          <TabHeader title="Room Tips" buttonText="Finish Your Review" />
          <div>
            <p>Content</p>
          </div>
        </div>
      </>
    );
  }
}

export default RoomTips;
