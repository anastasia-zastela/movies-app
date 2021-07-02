import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { Row, Col, Button } from 'react-bootstrap';
import { listMovies } from '../actions/movieActions';

import Loader from '../components/common/Loader';
import Message from '../components/common/Message';

const MoviesScreen = () => {
    const [moviesToRender, setMoviesToRender] = useState('');

    const dispatch = useDispatch();

    const { loading, error, movies } = useSelector((state) => state.movieList);

    const { filteredMovies } = useSelector((state) => state.moviesSearch);

    const onClickSortHandler = (moviesArr) => {
        const sortedMoviesArr = moviesArr.sort((a, b) => a.title.localeCompare(b.title));

        setMoviesToRender(sortedMoviesArr);
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

    useEffect(() => {
        if (filteredMovies) {
            setMoviesToRender(filteredMovies);
        } else {
            setMoviesToRender('');
        }
    }, [filteredMovies, movies]);

    return (
        <React.Fragment>
            <h1>Movies</h1>
            {loading ? null : error ? null : (
                <Button
                    onClick={() => onClickSortHandler(moviesToRender ? moviesToRender : movies)}>
                    Show in alphabetical order
                </Button>
            )}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>{moviesToRender ? renderInputs(moviesToRender) : renderInputs(movies)}</Row>
            )}
        </React.Fragment>
    );
};

export default MoviesScreen;
