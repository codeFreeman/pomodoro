import React from "react";
import Tabs from "./Tabs";
import { ControlTabsWrapper } from "./styled_control";

const ControlTabs = () => {
  const settings = [
    "../../../images/add_red.svg",
    "tasklist",
    "analytics",
    "ringtone"
  ];
  return (
    <ControlTabsWrapper width="80px">
      {settings.map(set => (
        <Tabs key={set} icon={set} />
      ))}
    </ControlTabsWrapper>
  );
};

export default ControlTabs;
