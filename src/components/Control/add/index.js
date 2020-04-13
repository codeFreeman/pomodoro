import React, { useState } from "react";
import { connect } from "react-redux";
import { createTask } from "../../../actions";
import moment from "moment";
import ControlTitle from "../../utils/ControlTitle";
import TomatoInput from "../../utils/Input";
import { TomatoBotton } from "../styled_control";
import TomatoSelect from "../../utils/Select";

const Add = ({ createTask }) => {
  const [title, SetTitle] = useState("");
  const [round, setRound] = useState(1);
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
  const [toamtoSetting, setToamtoSetting] = useState(initSetting);
  const addTask = () => {
    SetTitle("");
    setRound(1);
    setToamtoSetting(initSetting);
    createTask({
      title,
      round,
      currentRound: 0,
      status: 1,
      todo: 1,
      create_at: moment().format("YYYY/MM/DD"),
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
        value={title}
        setValue={SetTitle}
        autoComplete="off"
      />
      <TomatoSelect
        taskRound={round}
        setTaskRound={setRound}
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
