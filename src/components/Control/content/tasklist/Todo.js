import React from "react";
import Task from "./Task";

const Todo = ({ data }) => {
  return (
    <div>
      {data.map(({ id, taskRound, taskTitle }) => (
        <Task key={id} id={id} taskTitle={taskTitle} taskRound={taskRound} />
      ))}
    </div>
  );
};

export default Todo;
