import React from 'react';
import MentionsCategory from '../MentionsCategory/index';

import { mentions__wrapper } from './reviewMentions.scss';

const ReviewMentions = () => {
  const mentions = [
    'All reviews',
    'In error',
    'Nobis',
    'Qui earum',
    'Sit',
    'Ut magni',
  ];

  return (
    <div className={mentions__wrapper}>
      <h4>Popular mentions</h4>
      {mentions.map(mention => (
        <MentionsCategory mention={mention} />
      ))}
    </div>
  );
};

export default ReviewMentions;
