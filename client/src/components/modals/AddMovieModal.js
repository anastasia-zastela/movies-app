import React from 'react';
import AddMovieForm from '../forms/AddMovieForm';
import { Button, Modal } from 'react-bootstrap';

const AddMovieModal = ({ showAddMovieModal, toggleShowModalAddMovie }) => {
    return (
        <Modal show={showAddMovieModal} onHide={toggleShowModalAddMovie}>
            <Modal.Header>
                <Modal.Title>Add New Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddMovieForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleShowModalAddMovie}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddMovieModal;
