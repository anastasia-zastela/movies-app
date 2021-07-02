import React from 'react';

import { Form, Button } from 'react-bootstrap';

const StarsGroupForm = ({ changeStars, addNewField, stars }) => {
    return (
        <Form.Group controlId="stars">
            {stars.map((star) => (
                <Form.Control
                    style={{
                        marginBottom: '10px'
                    }}
                    type="text"
                    value={star.value}
                    autoComplete="off"
                    placeholder="Enter star name and surname"
                    onChange={({ target }) => changeStars({ ...star, value: target.value })}
                    key={star.id}
                />
            ))}
            <Button variant="link" onClick={addNewField}>
                Add New Star
            </Button>
        </Form.Group>
    );
};

export default StarsGroupForm;
