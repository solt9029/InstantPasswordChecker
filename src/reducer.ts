import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';
import utils from './utils';

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

export default reducerWithInitialState(initialState)
  .case(actions.setPassword, (state, password) => ({ ...state, password }))
  .case(actions.ready, state => ({
    ...state,
    inputState: InputState.READY,
  }))
  .case(actions.activate, (state, password) => ({
    ...state,
    password,
    inputState: InputState.ACTIVE,
  }))
  .case(actions.pause, state => {
    utils.localStorage.addArrayItem('passwords', state.password);
    return {
      ...state,
      password: '',
      inputState: InputState.PAUSED,
    };
  });
