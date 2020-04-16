import React, { useState, useRef } from "react";
import { Box } from "@material-ui/core";
import Konva from "konva";
import { Stage, Layer, Shape, Circle } from "react-konva";
import { useSpring, animated } from "react-spring";

const RoundTomato = () => {
  return (
    <Box
      width="100px"
      height="100px"
      style={{ transform: "rotate(-90deg)" }}
      display="flex"
    >
      <Stage width="100" height="100">
        <Layer>
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.arc(50, 50, 40, 0 * Math.PI, 1.5 * Math.PI, false);
              context.fill();
              context.fillStrokeShape(shape);
            }}
            fill="#EA5548"
            stroke="#EA5548"
            strokeWidth={10}
          />
          {/* <Circle x={200} y={100} radius={50} fill="green" /> */}
        </Layer>
      </Stage>
    </Box>
  );
};

export default RoundTomato;
