import React from 'react';
import { shallow } from '../../enzyme';
import AddMovieForm from './AddMovieForm.js';
import { Provider } from 'react-redux';

import store from '../../store';

describe('AddMovieForm Component', () => {
    it('should render AddMovieForm component', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <AddMovieForm />
            </Provider>
        );
        expect(wrapper.containsMatchingElement(<AddMovieForm />)).toEqual(true);
    });
});
