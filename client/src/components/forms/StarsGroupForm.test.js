import React from 'react';
import { shallow } from '../../enzyme';
import StarsGroupForm from './StarsGroupForm.js';
import { Provider } from 'react-redux';

import store from '../../store';

describe("StarsGroupForm Component", () => {
  it("should render StarsGroupForm component", () => {
    const wrapper = shallow(
        <Provider store={store}>
            <StarsGroupForm 
            showShowMoreModal={() => 1} 
            handleCloseShowMoreModal={() => 1}
            stars={[{id: 1, title: "Some title"}]}
                />
        </Provider>
    )
    expect(wrapper.containsMatchingElement(<StarsGroupForm />)).toEqual(true);
  });
});