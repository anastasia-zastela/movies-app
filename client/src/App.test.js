import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe("App", () => {
  it("should render App component", () => {
    const wrapper = shallow(<App />);
  });
});