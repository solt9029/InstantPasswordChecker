import { State } from '../store';
import * as actions from '../reducers/app';
import PasswordInput from '../components/PasswordInput';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

export default connect(
  (state: State) => ({
    password: state.app.password,
  }),
  (dispatch: ThunkDispatch<any, any, any>) => ({
    handleChange: (v: string) => {
      dispatch(actions.handleChange(v));
    },
  })
)(PasswordInput);
