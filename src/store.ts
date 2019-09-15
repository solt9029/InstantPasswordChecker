import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as reducers from './reducers';
import history from './history';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Password from './models/Password';
import immutableTransform from 'redux-persist-transform-immutable';

export interface AppState {
  password: any;
  router: any;
}

// middlewares
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

// reducers
const persistConfig = {
  transforms: [immutableTransform({ records: [Password] })],
  key: 'app',
  storage,
  whitelist: ['password'],
};
const combinedReducers = combineReducers<AppState>({
  ...reducers,
  router: connectRouter(history),
});
const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
