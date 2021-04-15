import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER, SIGNUP_USER_FAILED } from './types';
import axios from 'axios';

export const signUpUser = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const response = await axios.post('/api/users/signup-user', body, config);

    console.log('signUpUser => response.data: ', JSON.stringify(response, null, 2));

    dispatch({
      type: SIGNUP_USER,
      payload: response.data
    });
    
  } catch (error) {
    dispatch({
      type: SIGNUP_USER_FAILED
    });
  }
};

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
