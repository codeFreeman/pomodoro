import styled from "styled-components";
import { Box } from "@material-ui/core";

export const ControlTabsWrapper = styled(Box)`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 1px;
    height: 100%;
    top: 0;
    right: 0;
    background-color: #414141;
  }
`;
