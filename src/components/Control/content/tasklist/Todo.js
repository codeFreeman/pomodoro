import React from "react";
import Task from "./Task";
import { useEffect } from "react";

const Todo = ({ data }) => {
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return (
    <div>
      {data.map(({ id, taskRound, taskTitle }) => (
        <Task key={id} id={id} taskTitle={taskTitle} taskRound={taskRound} />
      ))}
    </div>
  );
};

export default Todo;
