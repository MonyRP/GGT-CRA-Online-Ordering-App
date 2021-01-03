import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

export const setAlert = (msg, alertType, timeout = 3500) => (dispatch) => {
  const id = uuidv4();

  console.log('Inside of setAlert');
  console.log('setAlert msg: ' + msg);
  console.log('setAlert alertType: ' + alertType);

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id
    });
  }, timeout);
};
