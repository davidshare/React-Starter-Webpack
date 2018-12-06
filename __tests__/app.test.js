import React from 'react';
import App from '../src/components/App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('should be defined', () => {
   expect(App).toBeDefined();
 });

 it('should render a <div />', () => {
   const wrapper = shallow(<App />);
   expect(wrapper.find('div').length).toEqual(1);
 });
});
