import React from "react";
import { Box } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Tabs = ({ icon }) => {
  return (
    <Box width="100%" height="80px">
      <img src={icon} alt="" />
    </Box>
  );
};

export default Tabs;
