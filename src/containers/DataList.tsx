import { AppState } from '../store';
import DataList from '../components/DataList';
import { connect } from 'react-redux';

export default connect((state: AppState) => ({
  history: state.password.history,
}))(DataList);
