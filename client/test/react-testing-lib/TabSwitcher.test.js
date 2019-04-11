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

import Main from '../../components/Main/index';

afterEach(cleanup);

const sleep = t => new Promise(r => setTimeout(r, t));

test('should render proper review tab when clicking tabs', () => {
  const { queryByTestId, getByTestId, getByText } = render(
    <Main hotelId="5cae2d24099a2f630657e514" />
  );
  const reviewsTab = queryByTestId('Photos');
  expect(reviewsTab).toBeTruthy();
  fireEvent.click(reviewsTab);
  sleep(5).then(() => {
    // const photosBody = await waitForElement(() => queryByTestId('photos-body'));
    const photosBody = queryByTestId('photos-body');
    expect(photosBody).toBeTruthy();
  });
});

// getByLabelText('Text').value = 'hello';
// fireEvent.change(getByLabelText('Text'));
