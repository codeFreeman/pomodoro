import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTasklists } from "../../../actions";

import ControlTitle from "./ControlTitle";
import { Switch, Route, useLocation } from "react-router-dom";
import { TomatoTabWrapper, TomatoTab } from "../styled_control";
import { Box } from "@material-ui/core";
import Todo from "./tasklist/Todo";
import Done from "./tasklist/Done";
import Archive from "./tasklist/Archive";
import useWindowSize from "@rehooks/window-size";

const Tasklist = ({ fetchTasklists, tasks }) => {
  const { pathname } = useLocation();
  const { innerHeight } = useWindowSize();
  useEffect(() => {
    fetchTasklists();
  }, [fetchTasklists]);

  return (
    <div>
      <ControlTitle title="TASK LISTS" />
      <TomatoTabWrapper>
        <TomatoTab
          isactive={pathname === "/tasklist/todo" ? "true" : "false"}
          to="/tasklist/todo"
        >
          TO DO
        </TomatoTab>
        <TomatoTab
          isactive={pathname === "/tasklist/done" ? "true" : "false"}
          to="/tasklist/done"
        >
          DONE
        </TomatoTab>
        <TomatoTab
          isactive={pathname === "/tasklist/archive" ? "true" : "false"}
          to="/tasklist/archive"
        >
          ARCHIVE
        </TomatoTab>
      </TomatoTabWrapper>
      {tasks && (
        <Box height={innerHeight - 160} overflow="scroll">
          <Switch>
            <Route path="/tasklist/todo">
              <Todo data={tasks.filter(list => list.todo === true)} />
            </Route>
            <Route path="/tasklist/done">
              <Done />
            </Route>
            <Route path="/tasklist/archive">
              <Archive />
            </Route>
          </Switch>
        </Box>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("list", state);
  return {
    tasks: state.tasks.newtaskList
  };
};

export default connect(mapStateToProps, { fetchTasklists })(Tasklist);
