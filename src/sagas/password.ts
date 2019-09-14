import {
  setInputValue,
  activateInput,
  pauseInput,
  readyInput,
} from './../actions/password';
import { put, select } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { InputState } from '../reducers/password';

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

export function* changeInput({ payload }: Action<string>) {
  const state = yield select();
  const { inputState } = state.password;
  if (inputState === InputState.ACTIVE) {
    yield put(setInputValue(payload));
    return;
  }

  if (inputState === InputState.READY) {
    yield put(activateInput(payload));
    yield delay(500);
    yield put(pauseInput());
    yield delay(500);
    yield put(readyInput());
  }
}
