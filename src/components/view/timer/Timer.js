import React from "react";
import Title from "./Title";
import CountTomato from "./counttomato/CountTomato";
import CountDown from "./CountDown";
import Play from "./Play";
import Stop from "./Stop";
import Reset from "./Reset";
import Complete from "./Complete";
import Logo from "../Logo";

const Timer = () => {
  return (
    <>
      <Title task="My Frist Task" />
      <CountTomato round="4" currentRound="0" />
      <CountDown />
      <div>
        <Play />
        <Stop />
        <Reset />
      </div>
      <Complete />
      <Logo />
    </>
  );
};

export default Timer;
