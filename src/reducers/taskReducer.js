import _ from "lodash";
import {
  CREAE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  FETCH_TASKLISTS,
  FETCH_TASK,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKLISTS:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_TASK:
      return { ...state, [action.payload.id]: action.payload };
    case CREAE_TASK:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TASK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TASK:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
