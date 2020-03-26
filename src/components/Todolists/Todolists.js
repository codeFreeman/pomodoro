import React from "react";
import { Box } from "@material-ui/core";
import ActiveTodo from "./ActiveTodo";
import Todo from "./Todo";

const Todolists = ({ todoheight }) => {
  return (
    <Box height={todoheight} maxHeight={todoheight} bgcolor="#fff">
      <ActiveTodo />
      <Todo />
    </Box>
  );
};

export default Todolists;
