import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers/index'
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        applyMiddleware(
            apiMiddleware,
            thunkMiddleware
        )
    )
}