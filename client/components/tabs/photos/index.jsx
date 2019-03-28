import React, { Component } from 'react';
import TabHeader from '../../TabHeader';

class Photos extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <TabHeader title="Photos" buttonText="Post a Photo" />
        <div>
          <p>Content</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Photos;
