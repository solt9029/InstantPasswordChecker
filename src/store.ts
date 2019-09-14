import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as reducers from './reducers';
import history from './history';
import { PasswordState } from './reducers/password';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface State {
  password: PasswordState;
  router: any;
}

// middlewares
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

// reducers
const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['password'],
};
const combinedReducers = combineReducers<State>({
  ...reducers,
  router: connectRouter(history),
});
const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
