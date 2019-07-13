import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import results from './reducers/results';

var reducers = combineReducers({
  results
})

var store = createStore(reducers, applyMiddleware(thunk));

export default store;