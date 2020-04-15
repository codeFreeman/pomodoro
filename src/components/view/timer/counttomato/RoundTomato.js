import React, { useState, useRef } from "react";
import Konva from "konva";
import { Stage, Layer, Shape } from "react-konva";
import { Spring, animated } from "react-spring/renderprops-konva";

const RoundTomato = () => {
  // const [start, setStart] = useState(false);
  return (
    <Stage width={300} height={300}>
      <Layer>
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.arc(150, 150, 60, 0, 0.01 * Math.PI, false);
            // shape.rotate(0);
            context.fillStrokeShape(shape);
            console.log("shape", shape);
          }}
          offsetX={0}
          offsetY={0}
          // rotation={360}
          rotationDeg={180}
          stroke="#EA5548"
          strokeWidth={20}
        />
        {/* <Spring
          native
          form={{ value: 0 }}
          to={{ value: 1.5 }}
          config={{ duration: 3000 }}
        >
          {(props) => (
            // console.log('props', props)
            <animated.Shape
              // sceneFunc={(context, shape) => {
              //   context.beginPath();
              //   context.arc(50, 50, 45, 0, props.value * Math.PI, false);
              //   context.fill();
              //   context.closePath();
              //   context.fillStrokeShape(shape);
              // }}
              width={100}
              height={100}
              x={50}
              y={50}
              radius={45}
              // innerRadius={40}
              // outerRadius={70}
              fill="#EA5548"
              stroke="#fff"
              strokeWidth={10}
            />
          )}
        </Spring> */}
      </Layer>
    </Stage>
  );
};

export default RoundTomato;
