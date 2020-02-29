import axios from "axios";
import { LOGIN_SUCCESS } from "./actionTypes";

export const loginUser = data => dispatch => {
  axios
    .post(`/api/auth`, data)
    .then(result => {
      const { token } = result.data;
      localStorage.setItem("token", token);
      dispatch({ type: LOGIN_SUCCESS, payload: token });
    })
    .catch(err => {
      console.log(err);
    });
};
