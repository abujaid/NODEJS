import { LOGIN_SUCCESS } from "../actions/actionTypes";

const initialstate = {
  isAuthenticate: null,
  user: null
};

export default function authReducer(state = initialstate, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isAuthenticate: action.payload,
        user: action.payload
      };
    default:
      return state;
  }
}
