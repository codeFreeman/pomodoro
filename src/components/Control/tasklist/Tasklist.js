import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchTasklists } from "../../../actions";

import ControlTitle from "../../utils/ControlTitle";
import { Switch, Route, useLocation } from "react-router-dom";
import { TomatoTabWrapper, TomatoTab } from "./styled_tasklist";
import { Box } from "@material-ui/core";
import { List } from "./list";

import useWindowSize from "@rehooks/window-size";

const Tasklist = ({ fetchTasklists, tasks }) => {
  const { pathname } = useLocation();
  const { innerHeight } = useWindowSize();
  const [fetchAgain, setFetchAgain] = useState(false);
  useEffect(() => {
    fetchTasklists();
    if (fetchAgain) {
      fetchTasklists();
      setFetchAgain(false);
    }
  }, [fetchAgain, fetchTasklists]);

  if (!tasks) {
    return <div>Fetch data...</div>;
  }

  return (
    <div>
      <ControlTitle title="TASK LISTS" />
      <TomatoTabWrapper>
        <TomatoTab
          isactive={pathname.includes("todo") ? "true" : "false"}
          to="/tasklist/todo"
        >
          TO DO
        </TomatoTab>
        <TomatoTab
          isactive={pathname.includes("done") ? "true" : "false"}
          to="/tasklist/done"
        >
          DONE
        </TomatoTab>
      </TomatoTabWrapper>
      <Box height={innerHeight - 160} overflow="scroll">
        <Switch>
          <Route path="/tasklist/todo">
            <List
              data={tasks.filter((list) => list.todo === 0)}
              fetchAgain={fetchAgain}
              setFetchAgain={setFetchAgain}
            />
          </Route>
          <Route path="/tasklist/done">
            <List data={tasks.filter((list) => list.todo === 1)} />
          </Route>
        </Switch>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.taskList,
  };
};

export default connect(mapStateToProps, { fetchTasklists })(Tasklist);
