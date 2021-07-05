import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { Row, Col, Button } from 'react-bootstrap';
import { listMovies } from '../actions/movieActions';

import Loader from '../components/common/Loader';
import Message from '../components/common/Message';
import Paginate from '../components/common/Paginate';

const MoviesScreen = () => {
    const dispatch = useDispatch();

    const { loading, error, moviesRes } = useSelector((state) => state.movieList);

    const onClickPaginationHandler = (pageNumber) => {
        dispatch(listMovies(pageNumber));
    };

    const onClickSortHandler = () => {
        dispatch(listMovies(moviesRes.page, '', true));
    };

    const renderInputs = (moviesArr) => {
        const jsxToRender =
            moviesArr.length === 0 ? (
                <h3 style={{ marginTop: '20px' }}>No items found</h3>
            ) : (
                moviesArr.map((mov) => {
                    return (
                        <Col key={mov.title} sm={12} md={6} lg={4} xl={3}>
                            <MovieCard
                                key={mov._id}
                                id={mov._id}
                                title={mov.title}
                                releaseYear={new Date(mov.releaseYear).getFullYear()}
                                format={mov.format}
                                stars={mov.stars}
                            />
                        </Col>
                    );
                })
            );

        return jsxToRender;
    };
    useEffect(() => {
        dispatch(listMovies());
    }, []);

    return (
        <React.Fragment>
            <h1>Movies</h1>
            {loading ? null : error ? null : (
                <Button onClick={() => onClickSortHandler(moviesRes.movies)}>
                    Show in alphabetical order
                </Button>
            )}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <React.Fragment>
                    <Row>{renderInputs(moviesRes.movies)}</Row>
                    <Paginate
                        page={moviesRes.page}
                        pages={moviesRes.pages}
                        onClickPaginationHandler={onClickPaginationHandler}
                    />
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default MoviesScreen;
