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
    const prevPasswordsStr = localStorage.getItem('passwords');
    const prevPasswords = prevPasswordsStr ? prevPasswordsStr.split(',') : [];
    const passwords = [...prevPasswords, state.password];
    console.log(passwords);
    localStorage.setItem('passwords', passwords.toString());
    return {
      ...state,
      password: '',
      inputState: InputState.PAUSED,
    };
  });
