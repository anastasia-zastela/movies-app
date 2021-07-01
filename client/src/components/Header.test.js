import React from 'react';
import { shallow } from '../enzyme';
import Header from './Header.js';
import { Provider } from 'react-redux';

import store from '../store';

describe("Header Component", () => {
  it("should render Header component", () => {
    const wrapper = shallow(
    <Provider store={store}>
        <Header />
    </ Provider>);
        expect(wrapper.containsMatchingElement(<Header/>)).toEqual(true);
  });
});