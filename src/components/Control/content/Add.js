import React from "react";
import { TextField, Box } from "@material-ui/core";
import ControlTitle from "./ControlTitle";
import { TomatoSelect, TomatoBotton } from "../styled_control";
const tomatoSmallGray =
  process.env.PUBLIC_URL + "/images/tomato_small_gray.svg";
// const tomatoSmallColor =
//   process.env.PUBLIC_URL + "/images/tomato_small_color.svg";

const Add = () => {
  return (
    <div>
      <ControlTitle title="ADD NEW TASK" />
      <Box marginBottom="24px">
        <div style={{ marginBottom: "8px" }}>TASK TITLE</div>
        <TextField
          id="taskTitle"
          defaultValue=""
          placeholder="add your new task"
          variant="filled"
          fullWidth
          style={{ backgroundColor: "#fff", borderRadius: "4px" }}
        />
      </Box>
      <Box marginBottom="24px">
        <div style={{ marginBottom: "8px" }}>ESTIMATED TASK ROUND</div>
        <TomatoSelect>
          <img src={tomatoSmallGray} alt="round" />
          <img src={tomatoSmallGray} alt="round" />
          <img src={tomatoSmallGray} alt="round" />
          <img src={tomatoSmallGray} alt="round" />
          <img src={tomatoSmallGray} alt="round" />
          <img src={tomatoSmallGray} alt="round" />
          <img src={tomatoSmallGray} alt="round" />
          <img src={tomatoSmallGray} alt="round" />
          <img src={tomatoSmallGray} alt="round" />
          <img src={tomatoSmallGray} alt="round" />
        </TomatoSelect>
      </Box>
      <TomatoBotton variant="contained" color="secondary" fullWidth>
        ADD TASK
      </TomatoBotton>
    </div>
  );
};

export default Add;
