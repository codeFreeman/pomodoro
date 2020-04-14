import styled from "styled-components";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

export const TomatoTabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TomatoTab = styled(Link)`
  width: 80px;
  height: 24px;
  line-height: 24px;
  border-radius: 8px 8px 0px 0px;
  display: inline-block;
  margin-right: 4px;
  background-color: #606060;
  text-align: center;
  color: #acacac;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 0.6px;
  font-family: Lato;
  font-weight: bolder;
  ${({ isactive }) =>
    isactive === "true" &&
    `
      background-color: #EA5548;
      color:#fff;
  `}
`;

export const TaskEditWrapper = styled(Box)`
  position: relative;
  flex-direction: column;

  &::after {
    content: "";
    background-color: #333333;
    position: absolute;
    top: 0;
    left: 40px;
    width: calc(100% - 80px);
    height: 1px;
  }
`;
