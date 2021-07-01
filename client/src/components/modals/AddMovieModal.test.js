import React from 'react';
import { shallow } from '../../enzyme';
import AddMovieModal from './AddMovieModal.js';
import { Provider } from 'react-redux';

import store from '../../store';

describe('AddMovieModal Component', () => {
    it('should render AddMovieModal component', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <AddMovieModal showAddMovieModal={() => 1} handleCloseAddMovieModal={() => 1} />
            </Provider>
        );
        expect(wrapper.containsMatchingElement(<AddMovieModal />)).toEqual(true);
    });
});
