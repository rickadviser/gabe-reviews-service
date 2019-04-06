/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  render,
  fireEvent,
  getByTestId,
  rerender,
  cleanup,
  waitForElement,
} from 'react-testing-library';
import 'jest-dom/extend-expect';
// import axiosMock from 'axios';
import '../enzyme/globalMocks';

import App from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App hotelId="123" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
