import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

describe('App component', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
