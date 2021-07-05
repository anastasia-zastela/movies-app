import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createMovie } from '../../actions/movieActions';
import { MOVIE_CREATE_RESET } from '../../constants/movieConstants';
import {
    checkStarFullnameForUniqueness,
    validateMovieInputs,
    validateStarFullname
} from '../../helpers/validateMovieInputs';
import StarsGroupForm from './StarsGroupForm';
import Loader from '../common/Loader';
import Message from '../common/Message';

const DEFAULT_VALIDATE_VALUES = {
    title: '',
    releaseYear: '',
    format: '',
    stars: ''
};

const DEFAULT_FORM_VALUES = {
    title: '',
    releaseYear: '2021',
    format: 'DVD',
    stars: [{ id: 1, value: '' }]
};

const AddMovieForm = () => {
    const dispatch = useDispatch();
    const [validateForms, setValidateForms] = useState(DEFAULT_VALIDATE_VALUES);
    const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);

    const { loading, error, success } = useSelector((state) => state.movieCreate);

    const { moviesRes } = useSelector((state) => state.movieList);

    const changeStars = (star) => {
        setFormValues({
            ...formValues,
            stars: formValues.stars.map((s) => (s.id === star.id ? star : s))
        });
    };

    const isObjEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    };

    const onChange = ({ target }) => {
        setFormValues({ ...formValues, [target.name]: target.value });
    };

    const arraysEqual = (arr1, arr2) => {
        console.log(JSON.stringify(arr1) == JSON.stringify(arr2));
        return JSON.stringify(arr1) == JSON.stringify(arr2);
    };

    const checkMovieForUniqueness = (movie) => {
        let boolean = true;
        moviesRes.movies.forEach((mov) => {
            if (mov.title.toLowerCase() === movie.title.toLowerCase()) {
                if (new Date(mov.releaseYear).getFullYear() === +movie.releaseYear) {
                    const starsValueArr = movie.stars.map((st) => st.value);
                    if (arraysEqual(mov.stars, starsValueArr)) boolean = false;
                }
            }
        });
        return boolean;
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const validationErrors = validateMovieInputs(formValues);

        if (!isObjEmpty(validationErrors)) {
            setValidateForms(validationErrors);
            return;
        }
        const isMovieUnique = checkMovieForUniqueness({
            title: formValues.title,
            releaseYear: formValues.releaseYear,
            format: formValues.format,
            stars: formValues.stars
        });
        console.log(isMovieUnique);

        if (!isMovieUnique) {
            setValidateForms({
                stars: 'This movie already exists in database'
            });
            return;
        }
        setValidateForms(DEFAULT_VALIDATE_VALUES);

        const releaseYearDate = new Date(formValues.releaseYear, 1);

        dispatch(
            createMovie({
                title: formValues.title,
                releaseYearDate,
                format: formValues.format,
                stars: formValues.stars
            })
        );
        setFormValues(DEFAULT_FORM_VALUES);
    };

    const addNewField = () => {
        const trimmedStars = validateStarFullname(formValues.stars);

        if (trimmedStars.length !== 0) {
            setValidateForms({
                stars: 'Star full name should not be empty and must contain both name and surname'
            });
            return;
        }
        if (formValues.stars.length !== 1) {
            const boolean = checkStarFullnameForUniqueness(formValues.stars);
            if (!boolean) {
                setValidateForms({
                    stars: 'Star full name should be unique'
                });
                return;
            }
        }
        setValidateForms(DEFAULT_VALIDATE_VALUES);

        setFormValues({
            ...formValues,
            stars: [...formValues.stars, { id: Date.now(), value: '' }]
        });
    };

    useEffect(() => {
        dispatch({ type: MOVIE_CREATE_RESET });
    }, [dispatch]);

    return (
        <Row>
            <Col md={8}>
                {error && <Message variant="danger">{error}</Message>}
                {success && <Message variant="success">Movie created</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            autoComplete="off"
                            name="title"
                            placeholder="Enter title"
                            value={formValues.title}
                            onChange={onChange}></Form.Control>
                    </Form.Group>
                    {validateForms.title && (
                        <Message variant="danger">{validateForms.title}</Message>
                    )}
                    <Form.Group controlId="releaseYear">
                        <Form.Label>Release Year</Form.Label>
                        <Form.Control
                            type="number"
                            autoComplete="off"
                            min="1890"
                            max="2021"
                            name="releaseYear"
                            value={formValues.releaseYear}
                            onChange={onChange}></Form.Control>
                    </Form.Group>
                    {validateForms.releaseYear && (
                        <Message variant="danger">{validateForms.releaseYear}</Message>
                    )}
                    <Form.Group controlId="format">
                        <Form.Label>Format</Form.Label>
                        <Form.Control
                            as="select"
                            value={formValues.format}
                            name="format"
                            autoComplete="off"
                            onChange={onChange}>
                            <option>DVD</option>
                            <option>Blu-Ray</option>
                            <option>VHS</option>
                        </Form.Control>
                    </Form.Group>
                    {validateForms.format && (
                        <Message variant="danger">{validateForms.format}</Message>
                    )}
                    <Form.Label>Stars</Form.Label>
                    <StarsGroupForm
                        changeStars={changeStars}
                        addNewField={addNewField}
                        stars={formValues.stars}
                    />
                    {validateForms.stars && (
                        <Message variant="danger">{validateForms.stars}</Message>
                    )}

                    <Button type="submit" variant="primary">
                        Add
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default AddMovieForm;
