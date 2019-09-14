import { AppState } from '../store';
import * as actions from '../actions/password';
import PasswordInput from '../components/PasswordInput';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'typescript-fsa';

export default connect(
  (state: AppState) => ({
    inputValue: state.password.inputValue,
  }),
  (dispatch: Dispatch<Action<any>>) => ({
    changeInput: (v: string) => {
      dispatch(actions.changeInput(v));
    },
  })
)(PasswordInput);
