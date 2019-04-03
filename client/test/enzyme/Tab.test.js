/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { shallow, mount, render } from 'enzyme';
import Tab from '../../components/Tab';
import './globalMocks';

describe('Tab', () => {
  let component;

  beforeEach(() => {
    const props = {
      selected: 'Reviews',
      icon: 'edit',
      total: 120,
      category: 'Reviews',
      onClick: jest.fn(),
      handleKeyPress: jest.fn(),
    };

    component = shallow(<Tab {...props} />);
  });

  it('should render the correct category', () => {
    const category = component.find('.tabCategory');
    expect(category.text()).toBe('Reviews');
  });

  it('should render the correct total', () => {
    const totals = component.find('.tabNumbers');
    expect(totals.text()).toBe('120');
  });

  it('should dynamically append the correct class name if selected category matches current', () => {
    const totals = component.find('.tabswitch__tab');
    expect(totals.hasClass('active')).toBeTruthy();
  });
});
