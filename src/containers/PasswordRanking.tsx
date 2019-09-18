import { AppState } from '../store';
import PasswordRanking from '../components/PasswordRanking';
import { connect } from 'react-redux';

export default connect((state: AppState) => ({
  history: state.password.history,
}))(PasswordRanking);
