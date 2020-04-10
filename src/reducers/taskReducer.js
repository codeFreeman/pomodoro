import _ from "lodash";
import {
  CREAE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  FETCH_TASKLISTS,
  FETCH_TASK
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKLISTS:
      const newtaskList = [];
      for (const key in action.payload) {
        newtaskList.push({
          id: key,
          title: action.payload[key].title,
          round: action.payload[key].round,
          currentRound: action.payload[key].currentRound,
          todo: action.payload[key].todo,
          status: action.payload[key].status,
          create_at: action.payload[key].create_at
        });
      }
      return { ...state, newtaskList };
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
