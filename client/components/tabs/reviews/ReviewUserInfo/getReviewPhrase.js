const getReviewPhrase = type => {
  switch (type) {
    case 'photo':
      return 'posted a photo';
    case 'question':
      return 'asked a question';
    case 'room_tip':
      return 'wrote a tip';
    case 'review':
    default:
      return 'wrote a review';
  }
};

export default getReviewPhrase;
