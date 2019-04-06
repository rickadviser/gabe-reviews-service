/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { shallow, mount, render } from 'enzyme';
import TabHeader from '../../components/TabHeader';
import './globalMocks';

describe('TabHeader', () => {
  let component;
  let title;
  let button;

  beforeEach(() => {
    component = shallow(<TabHeader title="Title1" buttonText="Button1" />);
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
