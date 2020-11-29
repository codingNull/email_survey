import { FETCH_USER, ADD_CREDITS } from "../actions/type";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload ? action.payload : false;
    case ADD_CREDITS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
