import React, { useState } from "react";
import { connect } from "react-redux";
import { createTask } from "../../../actions";
import moment from "moment";
import ControlTitle from "../../utils/ControlTitle";
import Input from "../../utils/Input";
import Select from "../../utils/Select";
import Button from "../../utils/Button";
import initSetting from "./settings";

const Add = ({ createTask }) => {
  const [title, SetTitle] = useState("");
  const [round, setRound] = useState(1);

  const [toamtoSetting, setToamtoSetting] = useState(initSetting);
  const addTask = () => {
    SetTitle("");
    setRound(1);
    setToamtoSetting(initSetting);
    createTask({
      title,
      round,
      currentRound: 0,
      status: 0,
      todo: 0,
      create_at: moment().format("YYYY/MM/DD"),
    });
  };
  return (
    <div>
      <ControlTitle title="ADD NEW TASK" />
      <Input
        placeholder="add your new task"
        variant="filled"
        fullWidth
        style={{ backgroundColor: "#fff", borderRadius: "4px" }}
        value={title}
        setValue={SetTitle}
        autoComplete="off"
      />
      <Select
        taskRound={round}
        setTaskRound={setRound}
        toamtoSetting={toamtoSetting}
        setToamtoSetting={setToamtoSetting}
      />
      <Button
        variant="contained"
        color="secondary"
        handleClick={() => addTask()}
        text="ADD TASK"
      />
    </div>
  );
};

export default connect(null, { createTask })(Add);
