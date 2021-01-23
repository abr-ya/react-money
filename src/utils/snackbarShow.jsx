import { store } from '../index';
import { showAlert } from '../actions/alertActions';

const snackbarShow = (text, type) => {
  store.dispatch(showAlert(text, type));
};

export default snackbarShow;
