import styled from "styled-components";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const ControlTitleWrapper = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
  color: #fcfcfc;
  font-size: 20px;
  font-weight: bolder;
  font-family: Lato;
  line-height: 24px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;Í
    height: 1px;
    background-color: #414141;
  }
`;

export const InputStyle = styled.div`
  margin-bottom: 8px;
  font-family: "Lato";
  font-weight: bolder;
  font-size: 14px;
  letter-spacing: 0.7px;
  line-height: 17px;
  color: #acacac;
  ${({ isedit }) =>
    isedit === "true" &&
    `
      font-size: 12px;
      letter-spacing: 0.6px;
      line-height: 15px;
  `}
`;

export const TomatoSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonStyle = styled(Button)`
  height: 50px;
  border-radius: 50px;
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 17px;
  font-weight: bolder;
  font-family: Lato;
  color: #fcfcfc;
`;

export const TaskWrapper = styled(Box)`
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  letter-spacing: 0.8px;
  line-height: 19px;
  font-family: Lato;
  color: #fcfcfc;
`;

export const TaskActive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 50px;
  flex: 0 0 auto;
  img {
    width: 12px;
  }
`;

export const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 4px 0;
`;

export const TaskToggleSetting = styled.div`
  display: flex;
  width: 40px;
  height: 50px;
  flex: 0 0 auto;
  cursor: pointer;
`;

export const TaskLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
