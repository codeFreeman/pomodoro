import React, { useState } from "react";
import { connect } from "react-redux";
import { createTask } from "../../../actions";

import ControlTitle from "./ControlTitle";
import TomatoInput from "./add/TomatoInput";
import { TomatoBotton } from "../styled_control";
import TomatoSelect from "./add/TomatoSelect";

const Add = ({ createTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskRound, setTaskRound] = useState(1);
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
    createTask({
      taskTitle,
      taskRound,
      todo: true,
      done: false,
      archive: false
    });
  };
  return (
    <div>
      <ControlTitle title="ADD NEW TASK" />
      <TomatoInput
        placeholder="add your new task"
        variant="filled"
        fullWidth
        style={{ backgroundColor: "#fff", borderRadius: "4px" }}
        value={taskTitle}
        setValue={setTaskTitle}
        autoComplete="off"
      />
      <TomatoSelect
        taskRound={taskRound}
        setTaskRound={setTaskRound}
        toamtoSetting={toamtoSetting}
        setToamtoSetting={setToamtoSetting}
      />
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

export default connect(null, { createTask })(Add);
