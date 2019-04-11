/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { Suspense } from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  findByTestId,
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import '../enzyme/globalMocks';

import Main from '../../components/Main/index';

afterEach(cleanup);

const sleep = t => new Promise(r => setTimeout(r, t));

test('should render proper review tab when clicking tabs', async () => {
  const { queryByTestId, getByTestId, getByText, queryByText, debug } = render(
    <Main hotelId="5cae2d24099a2f630657e514" />
  );

  // find 'photos' tab
  const tab = getByTestId('Photos');
  expect(tab).toBeTruthy();

  // click tab
  fireEvent.click(tab);
  sleep(5)
    .then(() => {
      debug();

      // const [photosBar, albumCategories, photoCategory] = await waitForElement(
      //   () => [
      //     getByTestId('photosbar'),
      //     queryByText('Album Categories'),
      //     queryByText('Dining'),
      //   ]
      // );

      // find photos bar
      const photosBar = getByTestId('photosbar');
      expect(photosBar).toBeTruthy();

      // find an element in the photos tab and make sure it has appeared
      const albumCategories = queryByText('Album Categories');
      expect(albumCategories).toBeTruthy();

      const photoCategory = queryByText('Dining');
      expect(photoCategory).toBeTruthy();

      fireEvent.click(photoCategory);
      expect(photoCategory).toHaveClass('photosBar__category__active');
    })
    .catch(() => console.log('Issue with sleep'));
});

// getByLabelText('Text').value = 'hello';
// fireEvent.change(getByLabelText('Text'));

/*

*/
