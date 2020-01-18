import Password, { InputState } from './Password';

describe('Password model', () => {
  it('should set input value.', () => {
    const inputValue = 'inputValue';
    const password = new Password().setInputValue(inputValue);
    expect(password.inputValue).toBe(inputValue);
  });

  it('should ready input', () => {
    const password = new Password()
      .set('inputState', InputState.ACTIVE)
      .readyInput();
    expect(password.inputState).toBe(InputState.READY);
  });

  it('should activate input', () => {
    const inputValue = 'inputValue';
    const password = new Password().activateInput(inputValue);
    expect(password.inputValue).toBe(inputValue);
    expect(password.inputState).toBe(InputState.ACTIVE);
  });

  it('should pause input', () => {
    const inputValue = 'inputValue';
    const password = new Password().set('inputValue', inputValue).pauseInput();
    expect(password.inputValue).toBe('');
    expect(password.inputState).toBe(InputState.PAUSED);
    expect(password.history.get(0)).toBe(inputValue);
    expect(password.history.size).toBe(1);
  });
});
