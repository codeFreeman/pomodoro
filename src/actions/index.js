import fetchfirebase from "../apis/fetchfirebase";
import history from "../history";

import {
  CREAE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  FETCH_TASKLISTS,
  EDIT_STATUS,
  // FETCH_TASK,
} from "./types";

export const createTask = (taskData) => async (dispatch, getState) => {
  const response = await fetchfirebase.post("/podomoro.json", {
    ...taskData,
  });

  if (response.data.name) {
    dispatch({
      type: CREAE_TASK,
      payload: { id: response.data.name, ...taskData },
    });
    history.push("/tasklist/todo");
  }
};

export const editTask = (id, taskData) => async (dispatch, getState) => {
  const { taskList } = getState().tasks;
  console.log("editTask taskList", taskList);
  const updateStatus = taskList.map((task) => {
    if (task.id === id) {
      return { ...task, title: taskData.title, round: taskData.round };
    } else {
      return { ...task };
    }
  });
  console.log("updateStatus", updateStatus);
  const response = await fetchfirebase.patch("/podomoro.json", {
    ...updateStatus,
  });
  console.log("response", response);

  dispatch({ type: EDIT_TASK, payload: response.data });
  history.push("/tasklist/todo");
};

export const editStatus = (id) => async (dispatch, getState) => {
  const { taskList } = getState().tasks;
  const updateStatus = taskList.map((task) => {
    if (task.id === id) {
      return { ...task, id, status: 1 };
    } else {
      return { ...task, id, status: 0 };
    }
  });

  const response = await fetchfirebase.put("/podomoro.json", {
    ...updateStatus,
  });
  dispatch({ type: EDIT_STATUS, payload: response.data });
  history.push("/tasklist/todo");
};

export const deleteTask = (id) => async (dispatch) => {
  await fetchfirebase.delete(`/podomoro.json/${id}`);
  dispatch({ type: DELETE_TASK, payload: id });
  history.push("/tasklist/todo");
};

export const fetchTasklists = () => async (dispatch) => {
  const response = await fetchfirebase.get("/podomoro.json");
  dispatch({ type: FETCH_TASKLISTS, payload: response.data });
};

// export const fetchTask = id => async dispatch => {
//   console.log("id", id);
//   const response = await fetchfirebase.get(`/podomoro.json/${id}`);
//   console.log("response", response);
//   dispatch({ type: FETCH_TASK, payload: response.data });
// };
