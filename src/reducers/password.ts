import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from '../actions/password';
import Password from '../models/Password';

export default reducerWithInitialState(new Password())
  .case(actions.setInputValue, (state: Password, inputValue: string) =>
    state.setInputValue(inputValue)
  )
  .case(actions.readyInput, state => state.readyInput())
  .case(actions.activateInput, (state: Password, inputValue: string) =>
    state.activateInput(inputValue)
  )
  .case(actions.pauseInput, state => state.pauseInput());
