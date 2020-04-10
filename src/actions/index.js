import fetchfirebase from "../apis/fetchfirebase";
import history from "../history";

import {
  CREAE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  FETCH_TASKLISTS,
  FETCH_TASK
} from "./types";

export const createTask = taskData => async (dispatch, getState) => {
  const response = await fetchfirebase.post("/podomoro.json", {
    ...taskData
  });
  dispatch({ type: CREAE_TASK, payload: response.data });
  history.push("/tasklist/todo");
};

export const editTask = (id, taskData) => async (dispatch, getState) => {
  const response = await fetchfirebase.post(`/podomoro.json/${id}`, {
    ...taskData
  });
  dispatch({ type: EDIT_TASK, payload: response.data });
  history.push("/tasklist/todo");
};

export const deleteTask = id => async dispatch => {
  await fetchfirebase.delete(`/podomoro.json/${id}`);
  dispatch({ type: DELETE_TASK, payload: id });
  history.push("/tasklist/todo");
};

export const fetchTasklists = () => async dispatch => {
  const response = await fetchfirebase.get("/podomoro.json");
  console.log("fetchTasklists response", response);
  dispatch({ type: FETCH_TASKLISTS, payload: response.data });
};

// export const fetchTask = id => async dispatch => {
//   console.log("id", id);
//   const response = await fetchfirebase.get(`/podomoro.json/${id}`);
//   console.log("response", response);
//   dispatch({ type: FETCH_TASK, payload: response.data });
// };
