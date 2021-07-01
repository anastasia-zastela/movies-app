import React from 'react';
import { shallow } from './enzyme';
import App from './App.js';
import { Provider } from 'react-redux';

import store from './store';

describe("App Component", () => {
  it("should render App component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
    </ Provider>
    );
    expect(wrapper.containsMatchingElement(<App />)).toEqual(true);
  });
});