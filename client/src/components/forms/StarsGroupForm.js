import React from 'react'

import { Form, Button } from 'react-bootstrap';

const NewField = ({ onChange, value }) => {
    return (
        <Form.Control
            style={{
                marginBottom: '10px'
            }}
            type='text'
            value={value}
            autoComplete="off"
            placeholder='Enter star name and surname'
            onChange={onChange}
        ></Form.Control>
    )
}

const StarsGroupForm = ({ changeStars, addNewField, stars }) => {

    return (
        <Form.Group controlId='stars'>
            {stars.map((star) => <NewField key={star.id} value={star.value} onChange={({ target }) => changeStars({ ...star, value: target.value })} />)}
            <Button variant="link" onClick={addNewField} >Add New Star</Button>
        </Form.Group>
    )
}

export default StarsGroupForm
