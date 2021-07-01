import React from 'react';
import { shallow } from '../../enzyme';
import DeleteConfirmationModal from './DeleteConfirmationModal.js';
import { Provider } from 'react-redux';

import store from '../../store';

describe('DeleteConfirmationModal Component', () => {
    it('should render DeleteConfirmationModal component', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <DeleteConfirmationModal
                    showDeleteConfirmationModal={() => 1}
                    handleCloseDeleteConfirmationModal={() => 1}
                    deleteHandler={() => 1}
                    idMovieToDelete={1}
                />
            </Provider>
        );
        expect(wrapper.containsMatchingElement(<DeleteConfirmationModal />)).toEqual(true);
    });
});
