import React from "react";
// import NoTask from "./notask";
import TomatoTimer from "./tomatotimer";

import { ViewWrapper } from "./styled_view";

const View = () => {
  return (
    <ViewWrapper height="100%" bgcolor="#EAEAEA">
      <TomatoTimer />
      {/* <NoTask /> */}
    </ViewWrapper>
  );
};

export default View;
