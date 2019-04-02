import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('App.jsx component', () => {
  it('should render without errors', () => {
    const component = mount(<App />);
    const mainWrapper = component.find('#mainWrapper');
    console.log(component);
    expect(mainWrapper.length).toBe(2);
  });
});
