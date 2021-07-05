import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { listMovies } from '../actions/movieActions';
import AddMovieModal from './modals/AddMovieModal';

const Header = () => {
    const [userInput, setUserInput] = useState('');
    const [showAddMovieModal, setShowAddMovieModal] = useState(false);

    const dispatch = useDispatch();

    const onClickResetHandler = () => {
        setUserInput('');
        dispatch(listMovies());
    };

    const onClickSearchHandler = (e) => {
        e.preventDefault();

        if (!userInput) {
            return;
        }

        dispatch(listMovies(1, userInput.trim()));
    };

    const toggleShowModalAddMovie = () => setShowAddMovieModal(!showAddMovieModal);

    return (
        <header>
            <AddMovieModal
                showAddMovieModal={showAddMovieModal}
                toggleShowModalAddMovie={toggleShowModalAddMovie}
            />
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{ cursor: 'pointer' }} onClick={onClickResetHandler}>
                        Movies Search App
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Button onClick={toggleShowModalAddMovie}>Add Movie</Button>
                            </Nav.Item>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                />
                                <Button type="submit" onClick={(e) => onClickSearchHandler(e)}>
                                    Search
                                </Button>
                                <Button variant="secondary" onClick={onClickResetHandler}>
                                    Reset search
                                </Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
