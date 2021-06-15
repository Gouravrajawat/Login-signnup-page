import {
  SIGNUP_SUCESS,
  SIGNUP_FAILED,
  LOGIN_SUCESS,
  LOGIN_FAILED,
} from "../actions/action.types";

const initialState = {
  access: localStorage.getItem("access"),
  user: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_SUCESS:
    case LOGIN_SUCESS:
      localStorage.setItem("access", payload.token);
      return {
        ...state,
        access: payload.token,
      };
    case LOGIN_FAILED:
    case SIGNUP_FAILED:
      localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        user: null,
      };
    default:
      return state;
  }
}

