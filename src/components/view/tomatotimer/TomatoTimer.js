import React from "react";
import Title from "./Title";
import CountTomato from "./counttomato/CountTomato";
import Timer from "./timer";
import Play from "./Play";
import Stop from "./Stop";
import Reset from "./Reset";
import Complete from "./Complete";
import Logo from "../Logo";

const TomatoTimer = () => {
  return (
    <>
      <Title task="My Frist Task" />
      <CountTomato round="4" currentRound="0" />
      <Timer />
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

export default TomatoTimer;
