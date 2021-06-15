import axios from 'axios';
import {
  LOGIN_SUCESS,
  SIGNUP_SUCESS,
  LOGIN_FAILED,
  SIGNUP_FAILED,
} from '../actions/action.types';

export const signup = (name, email, password) => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };

  const body = { name, email, password };

  try {
    console.log(body);
    const res = axios.post("https://localhost:8080/api/user/signup",
      body,
      config
    );
    dispatch({
      type: SIGNUP_SUCESS,
      payload: res.data,
    });
    console.log('user created!');
  } catch (err) {
    dispatch({
      type: SIGNUP_FAILED,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };

  const body = { email, password };

  try {
    console.log(body);
    const res = axios.post("https://localhost:8080/api/user/login",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCESS,
      payload: res.data,
    });
    console.log('user logged In!');
  } catch (err) {
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};