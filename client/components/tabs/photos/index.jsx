import React, { Component } from 'react';
import TabHeader from '../../TabHeader';

import { upper__wrapper } from '../../css/main.scss';

class Photos extends Component {
  state = {};

  render() {
    return (
      <>
        <div className={upper__wrapper}>
          <TabHeader title="Photos" buttonText="Post a Photo" />
          <div>
            <p>Content</p>
          </div>
        </div>
      </>
    );
  }
}

export default Photos;
