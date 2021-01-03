import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

function alertReducer(state = initialState, action) {
  const { type, payload } = action;

  console.log('Inside of alertReducer');
  console.log('alertReducer type: ' + type);
  console.log('alertReducer payload: ' + payload);
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

export default alertReducer;
