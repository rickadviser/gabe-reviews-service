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

import Main from '../../components/Main/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main hotelId="5cae2d24099a2f630657e514" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
