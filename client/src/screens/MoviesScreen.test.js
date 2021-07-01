import React from 'react';
import { shallow } from '../enzyme';
import MoviesScreen from './MoviesScreen.js';
import { Provider } from 'react-redux';

import store from '../store';

describe('MoviesScreen Component', () => {
    it('should render MoviesScreen component', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <MoviesScreen />
            </Provider>
        );
        expect(wrapper.containsMatchingElement(<MoviesScreen />)).toEqual(true);
    });
});
