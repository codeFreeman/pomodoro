import React, { useState } from "react";
import { Box, Paper } from "@material-ui/core";
import { InputBase, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));
const AddTodo = ({ forwardedRef }) => {
  const classes = useStyles();
  const [todo, setTodo] = useState("");
  return (
    <div ref={forwardedRef}>
      <Box height="56px" width="446px" bgcolor="#fff" padding="4px 16px">
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          style={{ display: "flex" }}
        >
          <InputBase
            required
            id="addMission"
            inputProps={{ "aria-label": "naked" }}
            defaultValue={todo}
            onChange={e => setTodo(e.target.value)}
            placeholder="Add A New Mission"
            style={{ flex: "1 0 auto" }}
          />
          <IconButton style={{ flex: "0 0 auto" }}>
            <AddIcon />
          </IconButton>
        </form>
      </Box>
    </div>
  );
};

export default AddTodo;
