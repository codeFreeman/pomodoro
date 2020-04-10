import React from "react";
import Task from "./Task";

const Todo = ({ data }) => {
  return (
    <div>
      {data.map(({ id, round, title, status, currentRound }) => (
        <Task
          key={id}
          id={id}
          title={title}
          round={round}
          status={status}
          currentRound={currentRound}
        />
      ))}
    </div>
  );
};

export default Todo;
