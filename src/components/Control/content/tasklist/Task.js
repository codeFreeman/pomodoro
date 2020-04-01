import React from "react";
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
  return (
    <>
      <TaskWrapper width="100%" height="50px" bgcolor="#414141">
        <TaskActive>
          <img src={tomatoSmallColor} alt="" />
        </TaskActive>
        <TaskContent id={id}>
          <div>{taskTitle}</div>
          <div>{taskRound}</div>
        </TaskContent>
        <TaskToggleSetting>
          <FontAwesomeIcon icon={faEllipsisV} />
        </TaskToggleSetting>
      </TaskWrapper>
      <TaskEdit id={id} taskTitle={taskTitle} taskRound={taskRound} />
    </>
  );
};

export default Task;
