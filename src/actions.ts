import actionCreatorFactory from 'typescript-fsa';
import { InputState } from './reducer';

const actionCreator = actionCreatorFactory();

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

export const actions = {
  setPassword: actionCreator<string>('SET_PASSWORD'),
  addLocalStorage: actionCreator<void>('ADD_LOCAL_STORAGE'),
  ready: actionCreator<void>('READY'),
  activate: actionCreator<string>('ACTIVATE'),
  pause: actionCreator<void>('PAUSE'),
  handleChange: (value: string) => {
    return async (dispatch: any, getState: any) => {
      const { inputState } = getState();
      if (inputState === InputState.ACTIVE) {
        dispatch(actions.setPassword(value));
        return;
      }

      if (inputState === InputState.READY) {
        dispatch(actions.activate(value));
        await delay(500);
        dispatch(actions.pause());
        await delay(500);
        dispatch(actions.ready());
      }
    };
  },
};
