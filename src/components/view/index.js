import React from "react";
import NoTask from "./noTask";
import { ViewWrapper } from "./styled_view";

const View = () => {
  return (
    <ViewWrapper height="100%" bgcolor="#EAEAEA">
      <NoTask />
    </ViewWrapper>
  );
};

export default View;
