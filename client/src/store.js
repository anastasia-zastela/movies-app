import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { movieCreateReducer, movieDeleteReducer, movieListReducer } from './reducers/movieReducer';

const reducer = combineReducers({
    movieList: movieListReducer,
    movieDelete: movieDeleteReducer,
    movieCreate: movieCreateReducer
});

const middleware = [thunk];

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
