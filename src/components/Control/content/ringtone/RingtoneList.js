import React from "react";
import {
  RingtoneListRadio,
  RingtoneListTitle,
  RingtoneListIcon
} from "../styled_control";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

const RingtoneList = ({ currentSound, soundName, soundLink }) => {
  return (
    <>
      <RingtoneListRadio>
        <input type="radio" checked={currentSound} />
      </RingtoneListRadio>
      <RingtoneListTitle>{soundName}</RingtoneListTitle>
      <RingtoneListIcon>
        <FontAwesomeIcon icon={faPlayCircle} size="lg" color="#ACACAC" />
      </RingtoneListIcon>
    </>
  );
};

export default RingtoneList;
