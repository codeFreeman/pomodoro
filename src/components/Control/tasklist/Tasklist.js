import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTasklists } from "../../../actions";

import ControlTitle from "../../utils/ControlTitle";
import { Switch, Route, useLocation } from "react-router-dom";
import { TomatoTabWrapper, TomatoTab } from "../styled_control";
import { Box } from "@material-ui/core";
import Todo from "./Todo";
import Done from "./Done";
import useWindowSize from "@rehooks/window-size";

const Tasklist = ({ fetchTasklists, tasks }) => {
  const { pathname } = useLocation();
  const { innerHeight } = useWindowSize();
  useEffect(() => {
    fetchTasklists();
  }, [fetchTasklists]);

  // for (const key in action.payload) {
  //       taskList.push({
  //         id: key,
  //         title: action.payload[key].title,
  //         round: action.payload[key].round,
  //         currentRound: action.payload[key].currentRound,
  //         todo: action.payload[key].todo,
  //         status: action.payload[key].status,
  //         create_at: action.payload[key].create_at,
  //       });
  //     }

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
      </TomatoTabWrapper>
      {tasks && (
        <Box height={innerHeight - 160} overflow="scroll">
          <Switch>
            <Route path="/tasklist/todo">
              <Todo data={tasks.filter((list) => list.todo === 1)} />
            </Route>
            <Route path="/tasklist/done">
              <Done data={tasks.filter((list) => list.todo === 0)} />
            </Route>
          </Switch>
        </Box>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("list", state);
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, { fetchTasklists })(Tasklist);
