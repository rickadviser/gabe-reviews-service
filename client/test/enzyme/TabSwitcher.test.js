/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { shallow, mount, render } from 'enzyme';
import TabSwitcherPresentational from '../../components/TabSwitcher/TabSwitcherPresentational';
import Tab from '../../components/Tab/index';
import './globalMocks';

describe('TabSwitcher.jsx component', () => {
  let component;
  let wrapper;
  let selectTab;
  let handleKeyPress;
  let data;
  const sleep = t => new Promise(r => setTimeout(r, t));

  beforeEach(() => {
    selectTab = jest.fn();
    handleKeyPress = jest.fn();

    data = [
      {
        category: 'Test1',
        icon: 'test1',
        total: 12,
      },
      {
        category: 'Test2',
        icon: 'test2',
        total: 15,
      },
      {
        category: 'Test3',
        icon: 'test3',
        total: 16,
      },
      {
        category: 'Test4',
        icon: 'test4',
        total: 10,
      },
    ];

    component = shallow(
      <TabSwitcherPresentational
        data={data}
        selected="Test1"
        selectTab={selectTab}
        handleKeyPress={handleKeyPress}
      />
    );
    wrapper = component.find('.tabswitch__wrapper');
  });

  it('should render wrapper without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render the correct number of Tab components', () => {
    const tab = component.find(Tab);
    expect(tab.length).toBe(4);
  });
});
