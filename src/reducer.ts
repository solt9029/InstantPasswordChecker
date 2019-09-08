import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from './actions';

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

export const reducer = reducerWithInitialState(initialState)
  .case(actions.setPassword, (state, password) => ({ ...state, password }))
  .case(actions.setInputState, (state, inputState) => ({
    ...state,
    inputState,
  }))
  .case(actions.addLocalStorage, state => {
    const prevPasswordsStr = localStorage.getItem('passwords');
    const prevPasswords = prevPasswordsStr ? prevPasswordsStr.split(',') : [];
    const passwords = [...prevPasswords, state.password];
    localStorage.setItem('passwords', passwords.toString());
    return state;
  });
