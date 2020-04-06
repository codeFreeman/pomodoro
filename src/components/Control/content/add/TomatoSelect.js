import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { TomatoSelectWrapper } from "../../styled_control";
import { InputStyle } from "../../styled_control";

const Toamto = ({
  round,
  isChecked,
  toamtoSetting,
  setToamtoSetting,
  taskRound,
  setTaskRound
}) => {
  const tomatoSmallColor =
    process.env.PUBLIC_URL + "/images/tomato_small_color.svg";
  const tomatoSmallGray =
    process.env.PUBLIC_URL + "/images/tomato_small_gray.svg";
  // const [taskRound, setTaskRound] = useState(round);
  useEffect(() => {
    setTaskRound(round);
  }, [round, setTaskRound]);
  const hoverToamto = round => {
    // set round
    const newRound = taskRound !== round ? round : taskRound;
    setTaskRound(newRound);
    // Toamto status
    const newToamtoSetting = toamtoSetting.map(set => {
      if (set.round >= round + 1) {
        return {
          ...set,
          isChecked: false
        };
      } else {
        return {
          ...set,
          isChecked: true
        };
      }
    });
    setToamtoSetting(newToamtoSetting);
  };
  return (
    <img
      src={isChecked ? tomatoSmallColor : tomatoSmallGray}
      alt={`round ${round}`}
      onMouseEnter={() => hoverToamto(round)}
      onClick={() => hoverToamto(round)}
    />
  );
};
const TomatoSelect = ({
  taskRound,
  setTaskRound,
  toamtoSetting,
  setToamtoSetting,
  isedit
}) => {
  return (
    <Box marginBottom="24px">
      <InputStyle isedit={isedit}>ESTIMATED TASK ROUND</InputStyle>
      <TomatoSelectWrapper>
        {toamtoSetting.map(({ round, isChecked }) => (
          <Toamto
            key={round}
            round={round}
            isChecked={isChecked}
            toamtoSetting={toamtoSetting}
            setToamtoSetting={setToamtoSetting}
            taskRound={taskRound}
            setTaskRound={setTaskRound}
          />
        ))}
      </TomatoSelectWrapper>
    </Box>
  );
};

export default TomatoSelect;
