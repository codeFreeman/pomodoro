import React from "react";
import { Box } from "@material-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeLinear } from "d3-ease";
import AnimatedProgressProvider from "../../../utils/AnimatedProgressProvider";

// import { useSpring, animated } from "react-spring";

const RoundTomato = () => {
  return (
    <Box width="100px" height="100px" display="flex" margin="0 4px">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={0}
        easingFunction={easeLinear}
      >
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
