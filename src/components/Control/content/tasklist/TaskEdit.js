import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchTask, editTask } from "../../../../actions";

import { TaskEditWrapper, TomatoBotton } from "../../styled_control";
import TomatoInput from "../add/TomatoInput";
import TomatoSelect from "../add/TomatoSelect";

const TaskEdit = ({ fetchTask, editTask, id, taskTitle, taskRound }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTaskRound, setInputTaskRound] = useState(1);
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
      { round: 10, isChecked: false }
    ];
    const updateSetting = initSetting.map(set => {
      if (taskRound >= set.round) {
        return {
          ...set,
          isChecked: true
        };
      } else {
        return {
          ...set,
          isChecked: false
        };
      }
    });
    setToamtoSetting(updateSetting);
  }, [taskRound]);

  useEffect(() => {
    setInputValue(taskTitle);
    setInputTaskRound(taskRound);
  }, [taskTitle, taskRound]);

  useEffect(() => {
    fetchTask(id);
  }, [fetchTask, id]);
  return (
    <TaskEditWrapper
      display="flex"
      bgcolor="#414141"
      padding="16px 40px"
      id={id}
    >
      <TomatoInput
        placeholder="update new value"
        value={inputValue}
        setValue={setInputValue}
        isedit="true"
      />
      <TomatoSelect
        taskRound={inputTaskRound}
        setTaskRound={setInputTaskRound}
        toamtoSetting={toamtoSetting}
        setToamtoSetting={setToamtoSetting}
        isedit="true"
      />
      <Box display="flex" justifyContent="space-between">
        <TomatoBotton variant="contained" color="primary" fullWidth>
          DELETE
        </TomatoBotton>
        <TomatoBotton variant="contained" fullWidth>
          ARCHIVE
        </TomatoBotton>
        <TomatoBotton variant="contained" color="secondary" fullWidth>
          SAVE
        </TomatoBotton>
      </Box>
    </TaskEditWrapper>
  );
};
const mapStateToProps = (state, ownProps) => {
  console.log("edit", state);
  // return {
  //   task: state.stream[ownProps.match.params.id]
  // };
};

export default connect(mapStateToProps, { fetchTask, editTask })(TaskEdit);
