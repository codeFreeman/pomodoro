import React, { useRef } from "react";
import { Box } from "@material-ui/core";
import AddTodo from "./AddTodo";
import Todolists from "./Todolists";
import useWindowSize from "@rehooks/window-size";
import useComponentSize from "@rehooks/component-size";

const Todolist = () => {
  const { innerHeight } = useWindowSize();
  let addtodoRef = useRef(null);
  let { height } = useComponentSize(addtodoRef);
  console.log("innerHeight", innerHeight);
  console.log("height", height);
  const todolistPadding = 80;
  const todolistMargin = 144;
  return (
    <Box
      height="100%"
      bgcolor="#FFEDF7"
      padding="40px 80px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <AddTodo forwardedRef={addtodoRef} />
      <Todolists
        todoheight={innerHeight - height - todolistPadding - todolistMargin}
      />
    </Box>
  );
};

export default Todolist;
