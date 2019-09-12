import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from '../actions/app';
import utils from '../utils';

import actionCreatorFactory from 'typescript-fsa';

export enum InputState {
  READY,
  ACTIVE,
  PAUSED,
}

export interface State {
  password: string;
  inputState: InputState;
}

export const initialState: State = {
  password: '',
  inputState: InputState.READY,
};

const actionCreator = actionCreatorFactory();

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

export const setPassword = actionCreator<string>('SET_PASSWORD');
export const addLocalStorage = actionCreator<void>('ADD_LOCAL_STORAGE');
export const ready = actionCreator<void>('READY');
export const activate = actionCreator<string>('ACTIVATE');
export const pause = actionCreator<void>('PAUSE');

export const handleChange = (value: string) => {
  return async (dispatch: any, getState: any) => {
    const { inputState } = getState().app;
    if (inputState === InputState.ACTIVE) {
      dispatch(setPassword(value));
      return;
    }
    if (inputState === InputState.READY) {
      dispatch(activate(value));
      await delay(500);
      dispatch(pause());
      await delay(500);
      dispatch(ready());
    }
  };
};

export default reducerWithInitialState(initialState)
  .case(setPassword, (state, password) => ({ ...state, password }))
  .case(ready, state => ({
    ...state,
    inputState: InputState.READY,
  }))
  .case(activate, (state, password) => ({
    ...state,
    password,
    inputState: InputState.ACTIVE,
  }))
  .case(pause, state => {
    utils.localStorage.addArrayItem('passwords', state.password);
    return {
      ...state,
      password: '',
      inputState: InputState.PAUSED,
    };
  });
