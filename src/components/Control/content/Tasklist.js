import React, { useState, useEffect } from "react";
import ControlTitle from "./ControlTitle";
import { Switch, Route, useLocation } from "react-router-dom";
import { TomatoTabWrapper, TomatoTab } from "../styled_control";
import { Box } from "@material-ui/core";
import Todo from "./tasklist/Todo";
import Done from "./tasklist/Done";
import Archive from "./tasklist/Archive";
import axios from "axios";
import useWindowSize from "@rehooks/window-size";

const Tasklist = () => {
  const [fetchList, setFetchList] = useState([]);
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  const [archive, setArchive] = useState([]);
  const { pathname } = useLocation();
  const { innerHeight } = useWindowSize();
  const fetchData = async () => {
    const response = await axios.get(
      "https://podomoro-212c5.firebaseio.com/podomoro.json"
    );
    const newList = [];
    for (const key in response.data) {
      newList.push({
        id: key,
        taskTitle: response.data[key].taskTitle,
        taskRound: response.data[key].taskRound,
        todo: response.data[key].todo,
        done: response.data[key].done,
        archive: response.data[key].archive
      });
    }
    console.log("newList", newList);
    setFetchList(newList);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const todolist = fetchList.filter(list => list.todo === true);
    setTodo(todolist);
  }, [fetchList]);

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
      <Box height={innerHeight - 160} overflow="scroll">
        <Switch>
          <Route path="/tasklist/todo">
            <Todo data={todo} />
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
