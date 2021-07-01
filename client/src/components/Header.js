import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies, setSignal } from '../actions/movieActions';
import AddMovieModal from './modals/AddMovieModal';

const Header = () => {
    const [userInput, setUserInput] = useState('');
    const [showAddMovieModal, setShowAddMovieModal] = useState(false);

    const dispatch = useDispatch();

    const { success } = useSelector((state) => state.movieCreate);

    const refreshPage = () => {
        window.location.reload();
    };

    const { movies } = useSelector((state) => state.movieList);

    const onClickLogoHandler = () => {
        dispatch(setSignal(false));
        refreshPage();
    };

    const onClickSearchHandler = (e) => {
        e.preventDefault();

        if (!userInput) {
            return;
        }

        const filteredMoviesArr = movies.filter((mov) => {
            let boolean;
            const filteredActors = mov.stars.map(
                (st) => st.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
            );
            filteredActors.forEach((ac) => {
                if (ac) {
                    boolean = true;
                }
            });
            console.log(boolean);
            return boolean || mov.title.toLowerCase().indexOf(userInput.toLowerCase()) !== -1;
        });
        dispatch(searchMovies(filteredMoviesArr));

        dispatch(setSignal(true));
    };

    const handleCloseAddMovieModal = () => {
        setShowAddMovieModal(false);
        if (success) {
            refreshPage();
        }
    };
    const handleShowAddMovieModal = () => setShowAddMovieModal(true);

    const addMovieModal = (
        <AddMovieModal
            showAddMovieModal={showAddMovieModal}
            handleCloseAddMovieModal={handleCloseAddMovieModal}
        />
    );

    return (
        <header>
            {addMovieModal}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{ cursor: 'pointer' }} onClick={onClickLogoHandler}>
                        Movies Search App
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Button onClick={handleShowAddMovieModal}>Add Movie</Button>
                            </Nav.Item>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                    onChange={(e) => setUserInput(e.target.value)}
                                />
                                <Button type="submit" onClick={(e) => onClickSearchHandler(e)}>
                                    Search
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
