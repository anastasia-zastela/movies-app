import {
    MOVIE_CREATE_FAIL,
    MOVIE_CREATE_LOCALLY,
    MOVIE_CREATE_REQUEST,
    MOVIE_CREATE_RESET,
    MOVIE_CREATE_SUCCESS,
    MOVIE_DELETE_FAIL,
    MOVIE_DELETE_LOCALLY,
    MOVIE_DELETE_REQUEST,
    MOVIE_DELETE_SUCCESS,
    MOVIE_LIST_FAIL,
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS
} from '../constants/movieConstants';

export const movieListReducer = (state = { moviesRes: { movies: [] } }, action) => {
    switch (action.type) {
        case MOVIE_LIST_REQUEST:
            return {
                loading: true,
                moviesRes: {}
            };
        case MOVIE_LIST_SUCCESS:
            return {
                loading: false,
                moviesRes: action.payload
            };
        case MOVIE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case MOVIE_DELETE_LOCALLY:
            return {
                ...state,
                moviesRes: {
                    ...state.moviesRes,
                    movies: [
                        ...state.moviesRes.movies.filter((movie) => action.payload !== movie._id)
                    ]
                }
            };
        case MOVIE_CREATE_LOCALLY:
            return {
                ...state,
                moviesRes: {
                    ...state.moviesRes,
                    movies: [...state.moviesRes.movies, action.payload]
                }
            };
        default:
            return state;
    }
};

export const movieDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case MOVIE_DELETE_REQUEST:
            return { loading: true };
        case MOVIE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case MOVIE_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const movieCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case MOVIE_CREATE_REQUEST:
            return { loading: true };
        case MOVIE_CREATE_SUCCESS:
            return { loading: false, success: true, movie: action.payload };
        case MOVIE_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_CREATE_RESET:
            return {};
        default:
            return state;
    }
};
