import React from "react";
import { Box } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Tabs = ({ path, icon }) => {
  return (
    <Link to={path}>
      <Box
        width="100%"
        height="80px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <FontAwesomeIcon icon={icon} color="#fff" size="2x" fixedWidth />
      </Box>
    </Link>
  );
};

export default Tabs;
