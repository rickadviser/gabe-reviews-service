/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import '../enzyme/globalMocks';

import App from '../../App';

afterEach(cleanup);

it('should render proper review tab when clicking tabs', () => {
  const { queryByTestId, getByTestId, getByText } = render(
    <App hotelId="5ca68a56cb85a6716054a7d8" />
  );
  const tab = getByTestId('Photos');
  fireEvent.click(tab);
  const photoCategory = getByText('Dining');
  expect(photoCategory).toBeTruthy();
  fireEvent.click(photoCategory);
  expect(photoCategory).toHaveClass('photosBar__category__active');
});

// getByLabelText('Text').value = 'hello';
// fireEvent.change(getByLabelText('Text'));

/*

*/
