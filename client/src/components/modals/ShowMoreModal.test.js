import React from 'react';
import { shallow } from '../../enzyme';
import ShowMoreModal from './ShowMoreModal.js';
import { Provider } from 'react-redux';

import store from '../../store';

describe("ShowMoreModal Component", () => {
  it("should render ShowMoreModal component", () => {
    const wrapper = shallow(
        <Provider store={store}>
            <ShowMoreModal 
                showShowMoreModal={() => 1} 
                handleCloseShowMoreModal={() => 1}
                movie={{
                    title: 'Some title',
                    releaseYear: new Date(),
                    format: "DVD",
                    stars: ['John Cena']
                }}
            />
        </Provider>
    )
    expect(wrapper.containsMatchingElement(<ShowMoreModal />)).toEqual(true);
  });
});