/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../App';
import GlobalState from '../../context/GlobalState';
import TabSwitcher from '../../components/TabSwitcher';
import TabLoader from '../../components/TabLoader';
import './globalMocks';

describe('App.jsx component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App hotelId="" />);
  });

  it('should render GlobalState without errors', () => {
    const globalState = component.find(GlobalState);
    expect(globalState.length).toBe(1);
  });

  it('should render wrapper without errors', () => {
    const mainWrapper = component.find('.mainWrapper');
    expect(mainWrapper.length).toBe(1);
  });

  it('should render TabSwitcher without errors', () => {
    const tabSwitcher = component.find(TabSwitcher);
    expect(tabSwitcher.length).toBe(1);
  });

  it('should render TabLoader without errors', () => {
    const tabLoader = component.find(TabLoader);
    expect(tabLoader.length).toBe(1);
  });
});
