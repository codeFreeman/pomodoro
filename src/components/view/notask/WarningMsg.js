import React from "react";
import { WarningMsgStyle } from "./styled_notask";

const WarningMsg = () => {
  return (
    <WarningMsgStyle>
      You don’t have any task now, <br />
      please add task first!
    </WarningMsgStyle>
  );
};

export default WarningMsg;
