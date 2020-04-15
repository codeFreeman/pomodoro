import React from "react";
import { TitleStyle } from "./styled_timer";
const Title = ({ task }) => {
  return <TitleStyle>{task}</TitleStyle>;
};

export default Title;
