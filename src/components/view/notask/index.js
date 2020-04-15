import React from "react";
import Podomoro from "./Podomoro";
import Logo from "../Logo";
import WarningMsg from "./WarningMsg";

const NoTask = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%,-50%)",
          top: "50%",
          left: "50%",
        }}
      >
        <Podomoro />
        <WarningMsg />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "56px",
          transform: "translateX(-50%)",
          left: "50%",
        }}
      >
        <Logo />
      </div>
    </div>
  );
};

export default NoTask;
