import { combineReducers } from "redux";

import authReducer from "./authRecuder";

export default combineReducers({
  auth: authReducer,
});
