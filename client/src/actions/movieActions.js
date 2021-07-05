import axios from 'axios';
import {
    MOVIE_CREATE_FAIL,
    MOVIE_CREATE_LOCALLY,
    MOVIE_CREATE_REQUEST,
    MOVIE_CREATE_SUCCESS,
    MOVIE_DELETE_FAIL,
    MOVIE_DELETE_LOCALLY,
    MOVIE_DELETE_REQUEST,
    MOVIE_DELETE_SUCCESS,
    MOVIE_LIST_FAIL,
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS
} from '../constants/movieConstants';
import { BASE_URL } from '../constants/url';

export const listMovies =
    (pageNumber = 1, keyword = '', isSorted = false) =>
    async (dispatch) => {
        try {
            dispatch({
                type: MOVIE_LIST_REQUEST
            });
            const { data } = await axios.get(`${BASE_URL}/api/movies`, {
                params: {
                    pageNumber: pageNumber,
                    keyword: keyword
                }
            });

            let sortedData;
            if (isSorted) {
                sortedData = {
                    ...data,
                    movies: [...data.movies.sort((a, b) => a.title.localeCompare(b.title))]
                };
            }
            dispatch({
                type: MOVIE_LIST_SUCCESS,
                payload: sortedData ? sortedData : data
            });
        } catch (error) {
            dispatch({
                type: MOVIE_LIST_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            });
        }
    };

export const deleteMovie = (id) => async (dispatch) => {
    try {
        dispatch({
            type: MOVIE_DELETE_REQUEST
        });

        await axios.delete(`${BASE_URL}/api/movies/${id}`);

        dispatch({
            type: MOVIE_DELETE_SUCCESS
        });
        dispatch({
            type: MOVIE_DELETE_LOCALLY,
            payload: id
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: MOVIE_DELETE_FAIL,
            payload: message
        });
    }
};

export const createMovie =
    ({ title, releaseYearDate, format, stars }) =>
    async (dispatch) => {
        try {
            dispatch({
                type: MOVIE_CREATE_REQUEST
            });

            const releaseYear = releaseYearDate;

            const { data } = await axios.post(`${BASE_URL}/api/movies`, {
                title,
                releaseYear,
                format,
                stars: stars.map((star) => star.value)
            });

            dispatch({
                type: MOVIE_CREATE_SUCCESS,
                payload: data
            });
            dispatch({
                type: MOVIE_CREATE_LOCALLY,
                payload: {
                    _id: data._id,
                    title,
                    releaseYear,
                    format,
                    stars: stars.map((star) => star.value)
                }
            });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            dispatch({
                type: MOVIE_CREATE_FAIL,
                payload: message
            });
        }
    };
