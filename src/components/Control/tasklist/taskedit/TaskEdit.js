import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import { editTask, deleteTask } from "../../../../actions";

import { TaskEditWrapper } from "../styled_tasklist";
import Input from "../../../utils/Input";
import Select from "../../../utils/Select";
import Button from "../../../utils/Button";

const TaskEdit = ({
  id,
  title,
  round,
  currentRound,
  todo,
  status,
  create_at,
  editTask,
  deleteTask,
}) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputRound, setInputRound] = useState(1);
  const [toamtoSetting, setToamtoSetting] = useState([]);
  useEffect(() => {
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
      { round: 10, isChecked: false },
    ];
    const updateSetting = initSetting.map((set) => {
      if (round >= set.round) {
        return {
          ...set,
          isChecked: true,
        };
      } else {
        return {
          ...set,
          isChecked: false,
        };
      }
    });
    setToamtoSetting(updateSetting);
  }, [round]);

  useEffect(() => {
    setInputTitle(title);
    setInputRound(round);
  }, [round, title]);

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };
  const handleEditTask = (taskId) => {
    editTask(taskId, {
      title: inputTitle,
      round: inputRound,
    });
  };

  return (
    <TaskEditWrapper
      display="flex"
      bgcolor="#414141"
      padding="16px 40px"
      id={id}
    >
      <Input
        placeholder="update new value"
        value={inputTitle}
        setValue={setInputTitle}
        isedit="true"
      />
      <Select
        taskRound={inputRound}
        setTaskRound={setInputRound}
        toamtoSetting={toamtoSetting}
        setToamtoSetting={setToamtoSetting}
        isedit="true"
      />
      <Box display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="secondary"
          text="DELETE"
          style={{ marginRight: "8px" }}
          handleClick={() => handleDeleteTask(id)}
        />
        <Button
          variant="contained"
          color="primary"
          text="SAVE"
          style={{ marginLeft: "8px" }}
          handleClick={() => handleEditTask(id)}
        />
      </Box>
    </TaskEditWrapper>
  );
};

export default connect(null, { editTask, deleteTask })(TaskEdit);
