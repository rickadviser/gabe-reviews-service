import { string, number, shape, arrayOf } from 'prop-types';

const reviewPropTypes = shape({
  _id: string.isRequired,
  hotel_id: string.isRequired,
  user_id: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  date: string.isRequired,
  language: string.isRequired,
  traveler_type: string.isRequired,
  images: arrayOf(string).isRequired,
  ratings: shape({
    _id: string.isRequired,
    overall: number.isRequired,
    cleanliness: number.isRequired,
    location: number.isRequired,
    service: number.isRequired,
    sleep_quality: number.isRequired,
  }).isRequired,
});

export default reviewPropTypes;
