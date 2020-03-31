import React from "react";
import { Box } from "@material-ui/core";
import Tabs from "./Tabs";
import {
  Switch,
  Route
  // useHistory, useParams
} from "react-router-dom";

import {
  ControlTabsWrapper,
  ControlContentWrapper,
  ControlToggle,
  ToggleIcon
} from "./styled_control";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faList,
  faChartBar,
  faMusic,
  faArrowRight
  // faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

import Add from "./content/Add";
import Tasklist from "./content/Tasklist";
import Analytics from "./content/Analytics";
import Ringtone from "./content/Ringtone";

const Control = () => {
  const settings = [
    {
      path: "/add",
      icon: faPlusCircle
    },
    {
      path: "/tasklist/todo",
      icon: faList
    },
    {
      path: "/analytics",

      icon: faChartBar
    },
    {
      path: "/ringtone",
      icon: faMusic
    }
  ];
  return (
    <Box height="100%" bgcolor="#333333" display="flex">
      <ControlTabsWrapper width="80px">
        {settings.map(({ path, icon }) => (
          <Tabs key={path} path={path} icon={icon} />
        ))}
        <ControlToggle>
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <ToggleIcon />
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </Box>
        </ControlToggle>
      </ControlTabsWrapper>
      <ControlContentWrapper width="calc(100% - 80px)">
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/tasklist/:path">
            <Tasklist />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/ringtone">
            <Ringtone />
          </Route>
        </Switch>
      </ControlContentWrapper>
    </Box>
  );
};

export default Control;
