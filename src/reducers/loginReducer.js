import * as types from '../constants/actionTypes';

const initialState = 'block';

const loginReducer = (state=initialState, action) => {
  switch(action.type) {

    case types.SHOW_LOGIN:
      return action.payload;

    default:
      return state;
  }
};

export default loginReducer;