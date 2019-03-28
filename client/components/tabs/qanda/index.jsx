import React, { Component } from 'react';
import TabHeader from '../../TabHeader';

class QAndA extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <TabHeader title="Q &amp; A" buttonText="Ask a Question" />
        <div>
          <p>Content</p>
        </div>
      </React.Fragment>
    );
  }
}

export default QAndA;
