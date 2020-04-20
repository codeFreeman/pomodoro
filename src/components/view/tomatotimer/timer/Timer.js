import React, { useRef, useEffect } from "react";
import "../styles.css";
import { Box } from "@material-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { easeLinear } from "d3-ease";
import Compound from "react-compound-timer";
import AnimatedProgressProvider from "../../../utils/AnimatedProgressProvider";

const Timer = (props) => {
  return (
    <Compound
      initialTime={1500000}
      lastUnit="m"
      startImmediately={false}
      direction="backward"
      timeToUpdate={100}>
      {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
          <div>
            <Compound.Minutes />:
            <Compound.Seconds
              formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
            />
          </div>
          <div>{timerState}</div>
          <br />
          <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div>
        </React.Fragment>
      )}
    </Compound>
  );
};

export default Timer;
