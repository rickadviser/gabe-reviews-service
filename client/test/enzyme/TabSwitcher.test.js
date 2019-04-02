/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { shallow, mount, render } from 'enzyme';
import TabSwitcher from '../../components/TabSwitcher';
import Tab from '../../components/Tab';
import './globalMocks';

describe('TabSwitcher.jsx component', () => {
  let component;
  let wrapper;

  beforeEach(() => {
    component = shallow(<TabSwitcher update={() => {}} />);
    wrapper = component.find('.tabswitch__wrapper');
  });

  it('should render wrapper without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render the correct number of Tab components', () => {
    const tab = component.find(Tab);
    expect(tab.length).toBe(4);
  });

  test('enzyme dive', () => {
    // const TestComponent = () => (
    //   <NameContext.Provider value="Provided Value">
    //     <MyComponent />
    //   </NameContext.Provider>
    // );
    // const element = shallow(<TestComponent />);
    // expect(
    //   element
    //     .find(MyComponent)
    //     .dive()
    //     .text()
    // ).toBe('Provided Value');
  });
});
