import { createStore, combineReducers, applyMiddleware } from 'redux';
import results from './reducers/results';
import currentItem from './reducers/currentItem';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    results,
    currentItem
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;