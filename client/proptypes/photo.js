import { string, shape, oneOf, number } from 'prop-types';

import userPropTypes from './users';

const photoPropTypes = shape({
  _id: string.isRequired,
  category: oneOf([
    'Dining',
    'Pool & Beach',
    'Family and Play Areas',
    'Business Center & Event Rooms',
    'Room & Suite',
  ]).isRequired,
  url: string.isRequired,
  date: string.isRequired,
  description: string.isRequired,
  likes: number.isRequired,
  hotel_id: string.isRequired,
  user_id: userPropTypes.isRequired,
});

export default photoPropTypes;
