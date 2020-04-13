import React from "react";
import ControlTitle from "../../utils/ControlTitle";
import { Switch, Route, useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import Work from "./Work";
import Break from "./Break";
import { TomatoTabWrapper, TomatoTab } from "../styled_control";
import useWindowSize from "@rehooks/window-size";

const RingtoneList = () => {
  const { pathname } = useLocation();
  const { innerHeight } = useWindowSize();

  // const ringToneList = [
  //   { currentSound: true, soundName: "tone1", soundLink: "test" },
  //   { currentSound: false, soundName: "tone2", soundLink: "test" },
  //   { currentSound: false, soundName: "tone3", soundLink: "test" }
  // ];
  return (
    <div>
      <ControlTitle title="RING TONE" />
      <TomatoTabWrapper>
        <TomatoTab
          isactive={pathname === "/ringtone/work" ? "true" : "false"}
          to="/ringtone/work"
        >
          WORK
        </TomatoTab>
        <TomatoTab
          isactive={pathname === "/ringtone/break" ? "true" : "false"}
          to="/ringtone/break"
        >
          BREAK
        </TomatoTab>
      </TomatoTabWrapper>
      <Box height={innerHeight - 160} overflow="scroll">
        <Switch>
          <Route path="/ringtone/work">
            <Work />
          </Route>
          <Route path="/ringtone/break">
            <Break />
          </Route>
        </Switch>
      </Box>
    </div>
  );
};

export default RingtoneList;
