import { Record, List } from 'immutable';

export enum InputState {
  READY,
  ACTIVE,
  PAUSED,
}

export interface PasswordInterface {
  inputValue: string;
  inputState: InputState;
  history: List<string>;
}

export default class Password extends Record({
  inputValue: '',
  inputState: InputState.READY,
  history: List.of(),
}) {
  setInputValue(inputValue: string): Password {
    return this.set('inputValue', inputValue);
  }
  readyInput(): Password {
    return this.set('inputState', InputState.READY);
  }
  activateInput(inputValue: string): Password {
    return this.set('inputValue', inputValue).set(
      'inputState',
      InputState.ACTIVE
    );
  }
  pauseInput(): Password {
    return this.set('history', this.history.push(this.inputValue))
      .set('inputValue', '')
      .set('inputState', InputState.PAUSED);
  }
}
