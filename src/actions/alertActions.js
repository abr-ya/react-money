import { SHOW_ALERT, HIDE_ALERT } from './actionTypes';

export const hideAlert = () => ({
  type: HIDE_ALERT,
});

export const showAlert = (text, type = 'success') => ({
  type: SHOW_ALERT,
  payload: { type, text },
});
