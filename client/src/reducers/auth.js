import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from '../actions/types';

const initialState = {
  username: '',
  email: '',
  userLoggedIn: true
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  console.log('state from userReducer: ', state);
  switch (type) {
    case SIGNUP_USER:
      console.log('username: ', payload.username);
      console.log('email: ', payload.email);

      return { ...state, username: payload.username, email: payload.email, userLoggedIn: true };
    case LOGIN_USER:
      return { ...state, userLoggedIn: true };

    case LOGOUT_USER:
      return { ...state, userLoggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
