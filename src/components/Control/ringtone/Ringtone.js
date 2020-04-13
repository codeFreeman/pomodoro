import React from "react";
import {
  RingtoneListWrapper,
  RingtoneRadio,
  RingtoneTitle,
  RingtoneIcon,
} from "../styled_control";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

const Ringtone = ({
  id,
  currentSound,
  soundName,
  soundLink,
  ringroneSetting,
  setRingroneSetting,
}) => {
  const currentSoundHandler = (currentId) => {
    const newSetting = ringroneSetting.map((ringtone) => {
      if (ringtone.id === currentId) {
        return {
          ...ringtone,
          currentSound: true,
        };
      } else {
        return {
          ...ringtone,
          currentSound: false,
        };
      }
    });
    setRingroneSetting(newSetting);
  };
  return (
    <RingtoneListWrapper>
      <RingtoneRadio>
        <input
          id={id}
          type="radio"
          defaultChecked={currentSound}
          name="ringtone"
          onChange={() => currentSoundHandler(id)}
        />
      </RingtoneRadio>
      <RingtoneTitle>{soundName}</RingtoneTitle>
      <RingtoneIcon>
        <FontAwesomeIcon icon={faPlayCircle} size="lg" color="#ACACAC" />
      </RingtoneIcon>
    </RingtoneListWrapper>
  );
};

export default Ringtone;
