import React from "react";
import "../styles.css";
import { Box } from "@material-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { easeLinear } from "d3-ease";
import AnimatedProgressProvider from "../../../utils/AnimatedProgressProvider";

// import { useSpring, animated } from "react-spring";

const RoundTomato = () => {
  return (
    <Box width="12px" height="12px" display="flex" margin="0 4px">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={0}
        easingFunction={easeLinear}>
        {(value) => {
          return (
            <CircularProgressbar
              value={value}
              strokeWidth={50}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathTransition: "none",
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </Box>
  );
};

export default RoundTomato;
