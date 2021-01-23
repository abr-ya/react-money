import { connect } from 'react-redux';
import App from '../App';
import { showAlert, hideAlert } from '../actions/alertActions';

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const mapDispatchToProps = {
  showAlert,
  hideAlert,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
