import React from "react";
import { Box } from "@material-ui/core";
import ControlTabs from "./ControlTabs";
import ControlContent from "./ControlContent";

const Control = () => {
  return (
    <Box height="100%" bgcolor="#333333" display="flex">
      <ControlTabs />
      <ControlContent />
    </Box>
  );
};

export default Control;
