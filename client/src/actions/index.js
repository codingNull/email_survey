import axios from "axios";

import { FETCH_USER, FETCH_SURVEYS } from "./type";

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
    type: FETCH_USER,
    payload: res.data,
  });
};

export const sendSurvey = (values) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");
  dispatch({
    type: FETCH_SURVEYS,
    payload: res.data,
  });
};
