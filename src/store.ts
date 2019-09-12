import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as reducers from './reducers';
import history from './history';
import { State as AppState } from './reducers/app';
import thunk from 'redux-thunk';

export interface State {
  app: AppState;
  router: any;
}

export default createStore(
  combineReducers<State>({
    ...reducers,
    router: connectRouter(history),
  }),
  applyMiddleware(thunk, routerMiddleware(history))
);
