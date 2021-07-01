import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createMovie } from '../../actions/movieActions';
import { MOVIE_CREATE_RESET } from '../../constants/movieConstants';
import { validateMovieInputs } from '../../helpers/validateMovieInputs';
import StarsGroupForm from './StarsGroupForm';
import Loader from '../common/Loader';
import Message from '../common/Message';


const DEFAULT_VALIDATE_VALUES = {
    title: '',
    releaseYear: '',
    format: '',
    stars: ''
}

const DEFAULT_FORM_VALUES = {
    title: '',
    releaseYear: '',
    format: 'DVD',
    stars: [{ id: 1, value: '' }]
}

const AddMovieForm = () => {
    const dispatch = useDispatch()
    const [validateForms, setValidateForms] = useState(DEFAULT_VALIDATE_VALUES)
    const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES)

    const {
        loading,
        error,
        success,
    } = useSelector((state) => state.movieCreate)

    const changeStars = (star) => {
        setFormValues({ ...formValues, stars: formValues.stars.map(s => s.id === star.id ? star : s) })
    }

    const isObjEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    const onChange = ({ target }) => {
        setFormValues({ ...formValues, [target.name]: target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const validationErrors = validateMovieInputs(formValues);

        if (!isObjEmpty(validationErrors)) {
            setValidateForms(validationErrors);
            return;
        }
        setValidateForms(DEFAULT_VALIDATE_VALUES)

        const releaseYearDate = new Date(formValues.releaseYear)

        dispatch(createMovie({ title: formValues.title, releaseYearDate, format: formValues.format, stars: formValues.stars }))
        setFormValues(DEFAULT_FORM_VALUES);
    }

    const addNewField = () => {
        setFormValues({ ...formValues, stars: [...formValues.stars, { id: Date.now(), value: '' }] })
    }

    useEffect(() => {
        dispatch({ type: MOVIE_CREATE_RESET })

    }, [dispatch])

    return (
        <Row>
            <Col md={8}>
                {error &&
                    (<Message variant='danger'>
                        {error}
                    </Message>)}
                {success && (<Message variant='success'>
                    Movie created
                </Message>)}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type='text'
                            autoComplete="off"
                            name="title"
                            placeholder='Enter title'
                            value={formValues.title}
                            onChange={onChange}
                        ></Form.Control>
                    </Form.Group>
                    {validateForms.title &&
                        (<Message variant='danger'>
                            {validateForms.title}
                        </Message>)}
                    <Form.Group controlId='releaseYear'>
                        <Form.Label>Release Year</Form.Label>
                        <Form.Control
                            type='date'
                            autoComplete="off"
                            name="releaseYear"
                            value={formValues.releaseYear}
                            onChange={onChange}
                        ></Form.Control>
                    </Form.Group>
                    {validateForms.releaseYear &&
                        (<Message variant='danger'>
                            {validateForms.releaseYear}
                        </Message>)}
                    <Form.Group controlId="format">
                        <Form.Label>Format</Form.Label>
                        <Form.Control
                            as="select"
                            value={formValues.format}
                            name="format"
                            autoComplete="off"
                            onChange={onChange}
                        >
                            <option>DVD</option>
                            <option>Blu-Ray</option>
                            <option>VHS</option>
                        </Form.Control>
                    </Form.Group>
                    {validateForms.format &&
                        (<Message variant='danger'>
                            {validateForms.format}
                        </Message>)}
                    <Form.Label>Stars</Form.Label>
                    <StarsGroupForm changeStars={changeStars} addNewField={addNewField} stars={formValues.stars} />
                    {validateForms.stars &&
                        (<Message variant='danger'>
                            {validateForms.stars}
                        </Message>)}

                    <Button type='submit' variant='primary'>
                        Add
                    </Button>
                </Form>
            </Col>
        </Row>
    )
};

export default AddMovieForm;
