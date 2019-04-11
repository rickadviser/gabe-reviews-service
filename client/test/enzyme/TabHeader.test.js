/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { shallow, mount, render } from 'enzyme';
import TabHeaderPresentational from '../../components/TabHeader/TabHeaderPresentational';
import './globalMocks';

describe('<TabHeaderPresentational />', () => {
  let component;
  let title;
  let button;
  const toggleButtonPopup = jest.fn();

  beforeEach(() => {
    component = shallow(
      <TabHeaderPresentational
        title="Title1"
        buttonText="Button1"
        popup={false}
        toggleButtonPopup={toggleButtonPopup}
      />
    );
  });

  it('should render the correct title', () => {
    title = component.find('h2');
    expect(title.text()).toBe('Title1');
  });

  it('should render the correct button text', () => {
    button = component.find('.button__header');
    expect(button.text()).toBe('Button1');
  });
});
