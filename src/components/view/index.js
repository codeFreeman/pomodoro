import React from "react";
import NoTask from "./notask";
import Timer from "./timer";

import { ViewWrapper } from "./styled_view";

const View = () => {
  return (
    <ViewWrapper height="100%" bgcolor="#EAEAEA">
      <Timer />
      {/* <NoTask /> */}
    </ViewWrapper>
  );
};

export default View;
