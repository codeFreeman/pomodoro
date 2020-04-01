import React from "react";
import ControlTitle from "./ControlTitle";
// import { RingtoneListWrapper } from "../styled_control";
import Tabs from "../Tabs";
import Work from "./ringtone/Work";
import Break from "./ringtone/Break";

const Ringtone = () => {
  const RingtoneTabs = [
    { url: "/ringtone/work", name: "WORK", childComponents: <Work /> },
    { url: "/ringtone/break", name: "BREAK", childComponents: <Break /> }
  ];
  // const ringToneList = [
  //   { currentSound: true, soundName: "tone1", soundLink: "test" },
  //   { currentSound: false, soundName: "tone2", soundLink: "test" },
  //   { currentSound: false, soundName: "tone3", soundLink: "test" }
  // ];
  return (
    <div>
      <ControlTitle title="RING TONE" />
      {RingtoneTabs.map(tabs => (
        <Tabs
          key={tabs.name}
          url={tabs.url}
          // childComponents={tabs.childComponents}
        />
      ))}
    </div>
  );
};

export default Ringtone;
