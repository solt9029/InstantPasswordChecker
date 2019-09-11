import actionCreatorFactory from 'typescript-fsa';
import { InputState } from './reducer';

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
    const { inputState } = getState();
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
