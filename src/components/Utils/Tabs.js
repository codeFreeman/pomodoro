import React from "react";
import styled from "styled-components";
// import { Box } from "@material-ui/core";
// import { Switch, Route, Link } from "react-router-dom";

// const TabWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// `;

// const Tab = styled(Link)`
//   width: 80px;
//   height: 24px;
//   line-height: 24px;
//   border-radius: 8px 8px 0px 0px;
//   display: inline-block;
//   margin-right: 4px;
//   background-color: #606060;
//   text-align: center;
//   color: #acacac;
//   text-decoration: none;
// `;

const Tabs = ({ url, name, childComponents }) => {
  console.log("url", url);
  // console.log("name", name);
  // console.log("childComponents", childComponents);
  return <div>Tabs</div>;
  {
    /* <TabWrapper>
        <Tab to={links}>{name}</Tab>
      </TabWrapper>
      <Box>
        <Switch>
          <Route path={link}>{childComponents}</Route>
        </Switch>
      </Box> */
  }
};

export default Tabs;
