import React from 'react';
import { shallow } from '../enzyme';
import MovieCard from './MovieCard.js';
import { Provider } from 'react-redux';

import store from '../store';

describe("MovieCard Component", () => {
  it("should render MovieCard component", () => {
    const wrapper = shallow(
    <Provider store={store}>
        <MovieCard id={1} title="Some title" releaseYear={new Date()} format="DVD" stars={['John Cena']} />
    </ Provider>);
        expect(wrapper.containsMatchingElement(<MovieCard/>)).toEqual(true);
  });
});