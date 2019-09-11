import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as reducers from './reducers';
import history from './history';

export default createStore(
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  }),
  applyMiddleware(routerMiddleware(history))
);
