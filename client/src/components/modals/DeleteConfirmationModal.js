import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const DeleteConfirmationModal = ({
    showDeleteConfirmationModal,
    toggleDeleteConfirmationModal,
    deleteHandler,
    idMovieToDelete
}) => {
    return (
        <Modal show={showDeleteConfirmationModal} onHide={toggleDeleteConfirmationModal}>
            <Modal.Body>Are you sure?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => deleteHandler(idMovieToDelete)}>
                    Yes, delete
                </Button>
                <Button variant="secondary" onClick={toggleDeleteConfirmationModal}>
                    No, cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmationModal;
