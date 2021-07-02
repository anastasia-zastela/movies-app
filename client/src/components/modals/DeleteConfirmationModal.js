import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const DeleteConfirmationModal = ({
    showDeleteConfirmationModal,
    handleCloseDeleteConfirmationModal,
    deleteHandler,
    idMovieToDelete
}) => {
    return (
        <Modal show={showDeleteConfirmationModal} onHide={handleCloseDeleteConfirmationModal}>
            <Modal.Body>Are you sure?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => deleteHandler(idMovieToDelete)}>
                    Yes, delete
                </Button>
                <Button variant="secondary" onClick={handleCloseDeleteConfirmationModal}>
                    No, cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmationModal;
