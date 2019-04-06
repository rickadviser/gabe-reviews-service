/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { shallow, mount, render } from 'enzyme';
import TabLoader from '../../components/TabLoader';
import Reviews from '../../components/tabs/reviews/index';
import Photos from '../../components/tabs/photos/index';
import QAndA from '../../components/tabs/qanda/index';
import RoomTips from '../../components/tabs/roomtips/index';

import './globalMocks';

describe('TabLoader', () => {
  let component;
  let wrapper;

  beforeEach(() => {
    const props = {
      tab: 'Reviews',
    };

    component = shallow(<TabLoader {...props} />);
    wrapper = component.find('.main__filter__wrapper');
  });

  it('should render the correct tab', () => {
    expect(wrapper.find(Reviews).exists()).toBeTruthy();
  });

  it('should not render any incorrect tabs', () => {
    expect(wrapper.find(Photos).exists()).toBeFalsy();
    expect(wrapper.find(QAndA).exists()).toBeFalsy();
    expect(wrapper.find(RoomTips).exists()).toBeFalsy();
  });
});
