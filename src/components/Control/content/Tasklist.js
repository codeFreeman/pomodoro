import React from "react";
import ControlTitle from "./ControlTitle";
import { Switch, Route } from "react-router-dom";
import { TomatoTabWrapper, TomatoTab } from "../styled_control";
import { Box } from "@material-ui/core";
import Todo from "./tasklist/Todo";
import Done from "./tasklist/Done";
import Archive from "./tasklist/Archive";

const Tasklist = () => {
  return (
    <div>
      <ControlTitle title="TASK LISTS" />
      <TomatoTabWrapper>
        <TomatoTab to="/tasklist/todo">TO DO</TomatoTab>
        <TomatoTab to="/tasklist/done">DONE</TomatoTab>
        <TomatoTab to="/tasklist/archive">ARCHIVE</TomatoTab>
      </TomatoTabWrapper>
      <Box>
        <Switch>
          <Route path="/tasklist/todo">
            <Todo />
          </Route>
          <Route path="/tasklist/done">
            <Done />
          </Route>
          <Route path="/tasklist/archive">
            <Archive />
          </Route>
        </Switch>
      </Box>
    </div>
  );
};

export default Tasklist;
