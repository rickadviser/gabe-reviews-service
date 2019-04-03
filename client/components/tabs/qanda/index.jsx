import React, { Component } from 'react';
import TabHeader from '../../TabHeader';

import { upper__wrapper } from '../../css/main.scss';

class QAndA extends Component {
  state = {};

  render() {
    return (
      <>
        <div className={upper__wrapper}>
          <TabHeader title="Q &amp; A" buttonText="Ask a Question" />
          <div>
            <p>Content</p>
          </div>
        </div>
      </>
    );
  }
}

export default QAndA;
