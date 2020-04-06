import React, { useState } from "react";
import TaskEdit from "./TaskEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import {
  TaskWrapper,
  TaskActive,
  TaskContent,
  TaskToggleSetting
} from "../../styled_control.js";
const tomatoSmallColor =
  process.env.PUBLIC_URL + "/images/tomato_small_color.svg";

const Task = ({ id, taskTitle, taskRound }) => {
  const [toggleActive, setToggleActive] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <>
      <TaskWrapper width="100%" height="50px" bgcolor="#414141">
        <TaskActive>
          {toggleActive ? <img src={tomatoSmallColor} alt="" /> : ""}
        </TaskActive>
        <TaskContent id={id} onClick={() => setToggleActive(!toggleActive)}>
          <div>{taskTitle}</div>
          <div>{taskRound}</div>
        </TaskContent>
        <TaskToggleSetting onClick={() => setToggleEdit(!toggleEdit)}>
          <FontAwesomeIcon icon={toggleEdit ? faEllipsisH : faEllipsisV} />
        </TaskToggleSetting>
      </TaskWrapper>
      {toggleEdit && (
        <TaskEdit id={id} taskTitle={taskTitle} taskRound={taskRound} />
      )}
    </>
  );
};

export default Task;
