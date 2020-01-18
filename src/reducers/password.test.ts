import reducer from './password';
import Password from '../models/Password';
import * as actions from '../actions/password';
jest.mock('../models/Password');

describe('password reducer', () => {
  it('should set input value', () => {
    const inputValue = 'inputValue';

    const mockState = new Password();
    const mockSetInputValue = jest.fn();
    const mockNewState = new Password();
    mockSetInputValue.mockReturnValue(mockNewState);
    mockState.setInputValue = mockSetInputValue;

    const action = actions.setInputValue(inputValue);

    const actual = reducer(mockState, action);

    expect(actual).toBe(mockNewState);
    expect(mockState.setInputValue).toHaveBeenCalledWith(inputValue);
  });

  it('should ready input', () => {
    const mockState = new Password();
    const mockReadyInput = jest.fn();
    const mockNewState = new Password();
    mockReadyInput.mockReturnValue(mockNewState);
    mockState.readyInput = mockReadyInput;

    const action = actions.readyInput();

    const actual = reducer(mockState, action);

    expect(actual).toBe(mockNewState);
    expect(mockState.readyInput).toHaveBeenCalled();
  });

  it('should activate input', () => {
    const inputValue = 'inputValue';

    const mockState = new Password();
    const mockActivateInput = jest.fn();
    const mockNewState = new Password();
    mockActivateInput.mockReturnValue(mockNewState);
    mockState.activateInput = mockActivateInput;

    const action = actions.activateInput(inputValue);

    const actual = reducer(mockState, action);

    expect(actual).toBe(mockNewState);
    expect(mockState.activateInput).toHaveBeenCalledWith(inputValue);
  });

  it('should pause input', () => {
    const mockState = new Password();
    const mockPauseInput = jest.fn();
    const mockNewState = new Password();
    mockPauseInput.mockReturnValue(mockNewState);
    mockState.pauseInput = mockPauseInput;

    const action = actions.pauseInput();

    const actual = reducer(mockState, action);

    expect(actual).toBe(mockNewState);
    expect(mockState.pauseInput).toHaveBeenCalled();
  });
});
