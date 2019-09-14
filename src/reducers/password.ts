import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from '../actions/password';
import utils from '../utils';

export enum InputState {
  READY,
  ACTIVE,
  PAUSED,
}

export interface PasswordState {
  inputValue: string;
  inputState: InputState;
}

export const initialState: PasswordState = {
  inputValue: '',
  inputState: InputState.READY,
};

export default reducerWithInitialState(initialState)
  .case(actions.setInputValue, (state, inputValue) => ({
    ...state,
    inputValue,
  }))
  .case(actions.readyInput, state => ({
    ...state,
    inputState: InputState.READY,
  }))
  .case(actions.activateInput, (state, inputValue) => ({
    ...state,
    inputValue,
    inputState: InputState.ACTIVE,
  }))
  .case(actions.pauseInput, state => {
    utils.localStorage.addArrayItem('passwords', state.inputValue);
    return {
      ...state,
      inputValue: '',
      inputState: InputState.PAUSED,
    };
  });
