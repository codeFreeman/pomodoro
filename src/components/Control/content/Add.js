import React, { useState } from "react";
import { TextField, Box } from "@material-ui/core";
import ControlTitle from "./ControlTitle";
import { TomatoBotton } from "../styled_control";
import TomatoSelect from "./add/TomatoSelect";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const Add = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskRound, setTaskRound] = useState(1);
  const history = useHistory();
  const initSetting = [
    { round: 1, isChecked: true },
    { round: 2, isChecked: false },
    { round: 3, isChecked: false },
    { round: 4, isChecked: false },
    { round: 5, isChecked: false },
    { round: 6, isChecked: false },
    { round: 7, isChecked: false },
    { round: 8, isChecked: false },
    { round: 9, isChecked: false },
    { round: 10, isChecked: false }
  ];
  const [toamtoSetting, setToamtoSetting] = useState(initSetting);
  const addTask = () => {
    setTaskTitle("");
    setTaskRound(1);
    setToamtoSetting(initSetting);
    // return data;
    Axios.post("https://podomoro-212c5.firebaseio.com/podomoro.json", {
      taskTitle,
      taskRound,
      todo: true,
      done: false,
      archive: false
    });
    history.push("/tasklist/todo");
  };
  return (
    <div>
      <ControlTitle title="ADD NEW TASK" />
      <Box marginBottom="24px">
        <div style={{ marginBottom: "8px" }}>TASK TITLE</div>
        <TextField
          id="taskTitle"
          placeholder="add your new task"
          variant="filled"
          fullWidth
          style={{ backgroundColor: "#fff", borderRadius: "4px" }}
          value={taskTitle}
          onChange={event => setTaskTitle(event.target.value)}
          autoComplete="off"
        />
      </Box>
      <Box marginBottom="24px">
        <div style={{ marginBottom: "8px" }}>ESTIMATED TASK ROUND</div>
        <TomatoSelect
          taskRound={taskRound}
          setTaskRound={setTaskRound}
          toamtoSetting={toamtoSetting}
          setToamtoSetting={setToamtoSetting}
        />
      </Box>
      <TomatoBotton
        variant="contained"
        color="secondary"
        fullWidth
        onClick={() => addTask()}
      >
        ADD TASK
      </TomatoBotton>
    </div>
  );
};

export default Add;
