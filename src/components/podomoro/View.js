import React from "react";
import Podomoro from "./Podomoro";
import Logo from "./Logo";
import { ViewWrapper, WarningMsg } from "./styled_podomoro";

const View = () => {
  return (
    <ViewWrapper height="100%" bgcolor="#EAEAEA">
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%,-50%)",
          top: "50%",
          left: "50%"
        }}
      >
        <Podomoro />
        <WarningMsg>
          You don’t have any task now,
          <br /> please add task first!
        </WarningMsg>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "56px",
          transform: "translateX(-50%)",
          left: "50%"
        }}
      >
        <Logo />
      </div>
    </ViewWrapper>
  );
};

export default View;
