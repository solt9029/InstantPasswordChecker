import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers';
import history from './history';

export default createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(routerMiddleware(history))
);
