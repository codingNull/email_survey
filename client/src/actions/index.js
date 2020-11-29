import axios from "axios";

import { FETCH_USER, ADD_CREDITS } from "./type";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current-user");
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const addCredits = (token) => async (dispatch) => {
  const res = await axios.post("/api/add-credits", token);
  dispatch({
    type: ADD_CREDITS,
    payload: res.data,
  });
};
