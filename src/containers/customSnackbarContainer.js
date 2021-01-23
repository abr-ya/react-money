import { connect } from 'react-redux';
import CustomSnackbar from '../components/CustomSnackbar';
import { hideAlert } from '../actions/alertActions';

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const mapDispatchToProps = {
  hideAlert,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomSnackbar);
