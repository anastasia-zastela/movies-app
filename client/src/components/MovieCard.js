import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import ShowMoreModal from './modals/ShowMoreModal';
import DeleteConfirmationModal from './modals/DeleteConfirmationModal';
import { useDispatch, useSelector } from 'react-redux';
import { MOVIE_CREATE_RESET } from '../constants/movieConstants';
import { deleteMovie } from '../actions/movieActions';

const MovieCard = ({ id, title, releaseYear, format, stars }) => {
    const dispatch = useDispatch();

    const [showShowMoreModal, setShowShowMoreModal] = useState(false);
    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);

    const movieDelete = useSelector((state) => state.movieDelete)
    const {
        success: successDelete,
    } = movieDelete

    const refreshPage = () => {
        window.location.reload();
    }

    const handleCloseShowMoreModal = () => {
        setShowShowMoreModal(false);
    }
    const handleShowShowMoreModal = () => setShowShowMoreModal(true);

    const handleCloseDeleteConfirmationModal = () => setShowDeleteConfirmationModal(false);
    const handleShowDeleteConfirmationModal = () => setShowDeleteConfirmationModal(true);

    const deleteHandler = (id) => {
        console.log(id)
        dispatch(deleteMovie(id))
    }

    const showMoreModal = <ShowMoreModal
        showShowMoreModal={showShowMoreModal}
        handleCloseShowMoreModal={handleCloseShowMoreModal}
        movie={{
            title,
            releaseYear,
            format,
            stars
        }}
    />

    const deleteConfirmationModal = <DeleteConfirmationModal
        showDeleteConfirmationModal={showDeleteConfirmationModal}
        handleCloseDeleteConfirmationModal={handleCloseDeleteConfirmationModal}
        deleteHandler={deleteHandler}
        idMovieToDelete={id}
    />

    useEffect(() => {
        dispatch({ type: MOVIE_CREATE_RESET })

        if (successDelete) {
            handleCloseDeleteConfirmationModal();
            refreshPage();
        }
    }, [
        dispatch,
        successDelete,
    ])

    return (
        <React.Fragment>
            {showMoreModal}
            {deleteConfirmationModal}
            <Card className="my-3 p-3 rounded">
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>Release Year:  <span className="font-weight-bold">{releaseYear}</span></Card.Text>
                    <Card.Text>Format:  <span className="font-weight-bold">{format}</span></Card.Text>

                    <Button variant="outline-secondary btn-sm" onClick={handleShowShowMoreModal}>Show More</Button>
                    <Button variant="outline-danger btn-sm" onClick={handleShowDeleteConfirmationModal}>Delete</Button>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default MovieCard
