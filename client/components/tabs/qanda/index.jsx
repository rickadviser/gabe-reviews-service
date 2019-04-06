import React from 'react';

import TabHeader from '../../TabHeader';
import BodyWrapper from '../BodyWrapper';
import QuestionsState from './QuestionsState';
import QuestionsBody from './QuestionsBody/index';

import { upper__wrapper } from '../../css/main.scss';

const QAndA = () => (
  <QuestionsState>
    <div className={upper__wrapper}>
      <TabHeader title="Q &amp; A" buttonText="Ask a Question" />
    </div>
    <div>
      <BodyWrapper>
        <QuestionsBody />
      </BodyWrapper>
    </div>
  </QuestionsState>
);

export default QAndA;
