import { takeEvery } from 'redux-saga/effects';
import { changeInput as _changeInput } from '../actions/password';
import { changeInput } from './password';

export default function* rootSaga() {
  yield takeEvery(_changeInput.type, changeInput);
}
