import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as reducers from './reducers';
import history from './history';
import { PasswordState } from './reducers/password';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

export interface State {
  password: PasswordState;
  router: any;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  combineReducers<State>({
    ...reducers,
    router: connectRouter(history),
  }),
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
