import React from "react";
import Countdown, { zeroPad } from "react-countdown";

const Timer = () => {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span style={{ color: "#FF4384", font: "Bold 176px Roboto" }}>
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + 1500000}
      renderer={renderer}
      autoStart={false}
    />
  );
};

export default Timer;
