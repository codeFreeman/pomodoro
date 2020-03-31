import styled from "styled-components";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
export const ControlContentWrapper = styled(Box)`
  padding: 32px;
  color: #fff;
`;
export const ControlToggle = styled.div`
  position: absolute;
  bottom: 32px;
  right: 16px;
  width: 90px;
  height: 50px;
  background-color: #fcfcfc;
  border-radius: 25px 5px 5px 25px;
  padding: 12px;
`;

export const ToggleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: #ea5548;
  color: #fff;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  position: relative;
  font-family: "Lato";
  font-weight: 300;
  letter-spacing: 3.6px;
  line-height: 29px;
  margin-right: 12px;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 5.6px;
    height: 7.4px;
    transform-origin: center;
    transform: rotateZ(45deg) scale(0.7) translateX(-1px) translateY(1px);
    background: #316901 0% 0% no-repeat padding-box;
    border-radius: 100%;
    opacity: 1;
  }
`;

export const TomatoSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
    width: 100%;
    height: 1px;
    background-color: #414141;
  }
`;

export const TomatoBotton = styled(Button)`
  height: 50px;
  border-radius: 50px;
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 17px;
  font-weight: bolder;
  font-family: Lato;
  color: #fcfcfc;
`;

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
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 50px;
  flex: 0 0 auto;
`;

export const TaskEditWrapper = styled(Box)`
  position: relative;

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
