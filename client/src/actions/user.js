import { LOGIN_USER, LOGOUT_USER } from '../actions/types';

export const loginUser = () => dispatch => {
  dispatch({
    type: LOGIN_USER
  });
};

export const logOutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
