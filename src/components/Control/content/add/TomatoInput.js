import React from "react";
import { Box, TextField } from "@material-ui/core";
import { InputStyle } from "../../styled_control";
const TomatoInput = ({ placeholder, value, setValue, isedit }) => {
  return (
    <Box marginBottom="24px">
      <InputStyle isedit={isedit}>TASK TITLE</InputStyle>
      <TextField
        placeholder={placeholder}
        variant="filled"
        fullWidth
        style={{ backgroundColor: "#fff", borderRadius: "4px" }}
        value={value}
        onChange={event => setValue(event.target.value)}
        autoComplete="off"
      />
    </Box>
  );
};

export default TomatoInput;
