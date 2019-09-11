import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
