import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from '../actions/password';

export enum InputState {
  READY,
  ACTIVE,
  PAUSED,
}

export interface PasswordState {
  inputValue: string;
  inputState: InputState;
  history: string[];
}

export const initialState: PasswordState = {
  inputValue: '',
  inputState: InputState.READY,
  history: [],
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
    return {
      ...state,
      history: [...state.history, state.inputValue],
      inputValue: '',
      inputState: InputState.PAUSED,
    };
  });
