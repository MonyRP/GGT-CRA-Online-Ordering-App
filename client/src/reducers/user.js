import { LOGIN_USER, LOGOUT_USER } from '../actions/types';

const initialState = {
  userLoggedIn: true
};

const userReducer = (state = initialState, action) => {
  const { type } = action;
  console.log('state from userReducer: ', state);
  switch (type) {
    case LOGIN_USER:
      return { ...state, userLoggedIn: true };

    case LOGOUT_USER:
      return { ...state, userLoggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
