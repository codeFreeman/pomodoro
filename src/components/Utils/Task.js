import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editStatus } from "../../actions";

import { TaskEdit } from "../control/tasklist/taskedit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import {
  TaskWrapper,
  TaskActive,
  TaskContent,
  TaskToggleSetting,
  TaskLink,
} from "./styled_utils";

const tomatoSmallColor =
  process.env.PUBLIC_URL + "/images/tomato_small_color.svg";

const Task = ({
  id,
  title,
  round,
  status,
  todo,
  currentRound,
  create_at,
  editStatus,
  fetchAgain,
  setFetchAgain,
}) => {
  const [active, setActive] = useState(null);
  const [toggleEdit, setToggleEdit] = useState(false);
  const handleActive = (activeId) => {
    editStatus(activeId);
    setFetchAgain(!fetchAgain);
  };
  useEffect(() => {
    setActive(status);
  }, [status]);

  return (
    <div style={{ borderBottom: "1px solid #333333" }}>
      <TaskWrapper width="100%" height="50px" bgcolor="#414141">
        <TaskActive onClick={() => handleActive(id)}>
          {active === 1 ? <img src={tomatoSmallColor} alt="" /> : ""}
        </TaskActive>
        <TaskContent id={id} onClick={() => handleActive(id)}>
          <div>{title}</div>
          <div>{round}</div>
        </TaskContent>
        <TaskToggleSetting onClick={() => setToggleEdit(!toggleEdit)}>
          <TaskLink
            to={!toggleEdit ? `/tasklist/todo/${id}` : "/tasklist/todo"}
          >
            <FontAwesomeIcon icon={toggleEdit ? faEllipsisH : faEllipsisV} />
          </TaskLink>
        </TaskToggleSetting>
      </TaskWrapper>
      {toggleEdit && (
        <TaskEdit
          id={id}
          title={title}
          round={round}
          currentRound={currentRound}
          status={status}
          todo={todo}
          create_at={create_at}
        />
      )}
    </div>
  );
};

export default connect(null, { editStatus })(Task);
