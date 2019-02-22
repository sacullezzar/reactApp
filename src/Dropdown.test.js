import React from 'react';
import {shallow, mount} from 'enzyme';
import Dropdown from './components/Dropdown'
import App from './App'


describe('Dropdown', () => {
  const app = mount(<App />)
  let wrapper = shallow(<Dropdown />)
  it('appears on the page', () => {
    expect(wrapper.length).toBe(1)
  })
  it('contains a list of options', () => {

  })
})