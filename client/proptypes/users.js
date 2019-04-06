import { string, number, shape } from 'prop-types';

const userPropTypes = shape({
  _id: string.isRequired,
  name: shape({
    first_name: string.isRequired,
    last_name: string.isRequired,
  }).isRequired,
  username: string.isRequired,
  location: shape({
    city: string.isRequired,
    state: string.isRequired,
  }).isRequired,
  contributions: number.isRequired,
  helpful_votes: number.isRequired,
});

export default userPropTypes;
