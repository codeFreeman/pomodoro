import React, { useState } from "react";
import Ringtone from "./Ringtone";

const initSetting = [
  { id: 1, soundName: "Work Ringtone 1", soundLink: "", currentSound: true },
  { id: 2, soundName: "Work Ringtone 2", soundLink: "", currentSound: false },
  { id: 3, soundName: "Work Ringtone 3", soundLink: "", currentSound: false },
  { id: 4, soundName: "Work Ringtone 4", soundLink: "", currentSound: false },
  { id: 5, soundName: "Work Ringtone 5", soundLink: "", currentSound: false }
];

const Work = () => {
  const [ringroneSetting, setRingroneSetting] = useState(initSetting);
  return (
    <div>
      {ringroneSetting.map(({ id, currentSound, soundName, soundLink }) => (
        <Ringtone
          key={id}
          id={id}
          currentSound={currentSound}
          soundName={soundName}
          soundLink={soundLink}
          ringroneSetting={ringroneSetting}
          setRingroneSetting={setRingroneSetting}
        />
      ))}
    </div>
  );
};

export default Work;
