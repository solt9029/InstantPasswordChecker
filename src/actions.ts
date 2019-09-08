import actionCreatorFactory from 'typescript-fsa';
import { InputState } from './reducer';

const actionCreator = actionCreatorFactory();

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

export const actions = {
  setPassword: actionCreator<string>('SET_PASSWORD'),
  setInputState: actionCreator<InputState>('SET_INPUT_STATE'),
  addLocalStorage: actionCreator<void>('ADD_LOCAL_STORAGE'),
  handleChange: (value: string) => {
    return async (dispatch: any, getState: any) => {
      const { inputState } = getState();
      if (inputState === InputState.ACTIVE) {
        dispatch(actions.setPassword(value));
        return;
      }

      if (inputState === InputState.READY) {
        dispatch(actions.setInputState(InputState.ACTIVE));
        dispatch(actions.setPassword(value));

        await delay(500);
        dispatch(actions.setInputState(InputState.PAUSED));
        dispatch(actions.addLocalStorage());
        dispatch(actions.setPassword(''));

        await delay(500);
        dispatch(actions.setInputState(InputState.READY));
      }
    };
  },
};
