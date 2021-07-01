import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ShowMoreModal = ({ showShowMoreModal, handleCloseShowMoreModal, movie }) => {
    return (
        <Modal show={showShowMoreModal} onHide={handleCloseShowMoreModal}>
            <Modal.Header>
                <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Release Year: <span className="font-weight-bold"> {movie.releaseYear}</span>
                </p>
                <p>
                    Format: <span className="font-weight-bold"> {movie.format}</span>
                </p>
                <p>
                    Stars:{' '}
                    {movie.stars.map((star, i) => (
                        <span key={i} className="font-weight-bold">
                            {i === movie.stars.length - 1 ? star + '' : star + ','}{' '}
                        </span>
                    ))}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseShowMoreModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowMoreModal;
