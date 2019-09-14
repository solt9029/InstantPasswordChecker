import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('PASSWORD');

export const setInputValue = actionCreator<string>('SET_INPUT_VALUE');
export const readyInput = actionCreator<void>('READY_INPUT');
export const activateInput = actionCreator<string>('ACTIVATE_INPUT');
export const pauseInput = actionCreator<void>('PAUSE_INPUT');
export const changeInput = actionCreator<string>('CHANGE_INPUT');
