import React from "react";
import Task from "../../../utils/Task";

const List = ({ data, fetchAgain, setFetchAgain }) => {
  if (!data) {
    return <div>fetch data</div>;
  }
  return (
    <div>
      {data.map(
        ({ id, round, title, status, currentRound, todo, create_at }) => (
          <Task
            key={id}
            id={id}
            title={title}
            round={round}
            status={status}
            todo={todo}
            currentRound={currentRound}
            create_at={create_at}
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
          />
        )
      )}
    </div>
  );
};

export default List;
