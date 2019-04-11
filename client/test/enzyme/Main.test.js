/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { shallow, mount, render } from 'enzyme';
import MainPresentational from '../../components/Main/MainPresentational';
import GlobalState from '../../context/GlobalState';
import TabSwitcher from '../../components/TabSwitcher';
import TabLoader from '../../components/TabLoader';
import './globalMocks';

describe('<MainPresentational />', () => {
  let component;
  let setCurrentTab;

  beforeEach(() => {
    setCurrentTab = jest.fn();

    component = shallow(
      <MainPresentational
        hotelId="5cae2d24099a2f630657e514"
        currentTab="Reviews"
        setCurrentTab={setCurrentTab}
      />
    );
  });

  it('should render GlobalState without errors', () => {
    const globalState = component.find(GlobalState);
    expect(globalState.length).toBe(1);
  });

  it('should render wrapper without errors', () => {
    const mainWrapper = component.find('.main__wrapper');
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
