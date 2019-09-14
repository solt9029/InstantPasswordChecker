import { AppState } from '../store';
import PasswordHistory from '../components/PasswordHistory';
import { connect } from 'react-redux';

export default connect((state: AppState) => ({
  history: state.password.history,
}))(PasswordHistory);
