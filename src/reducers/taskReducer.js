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
          taskTitle: action.payload[key].taskTitle,
          taskRound: action.payload[key].taskRound,
          todo: action.payload[key].todo,
          done: action.payload[key].done,
          archive: action.payload[key].archive
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
