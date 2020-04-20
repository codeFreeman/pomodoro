import React from "react";

import { CountTomatoWrapper } from "../styled_timer";
import RoundTomato from "./RoundTomato";

const CountTomato = ({ round, currentRound }) => {
  return (
    <CountTomatoWrapper>
      <RoundTomato />
      <RoundTomato />
      <RoundTomato />
      <RoundTomato />
    </CountTomatoWrapper>
  );
};

export default CountTomato;
