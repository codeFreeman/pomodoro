import React from "react";
import NoTask from "./NoTask";
import { ViewWrapper } from "./styled_podomoro";

const View = () => {
  return (
    <ViewWrapper height="100%" bgcolor="#EAEAEA">
      <NoTask />
    </ViewWrapper>
  );
};

export default View;
