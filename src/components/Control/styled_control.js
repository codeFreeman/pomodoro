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

export const RingtoneListWrapper = styled.li`
  width: 100%;
  height: 50px;
  background-color: #414141;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  border-bottom: 1px solid #333333;
`;

export const RingtoneRadio = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  font-size: 16px;
  letter-spacing: 0.8px;
  line-height: 19px;
  font-family: "Lato";
`;
export const RingtoneTitle = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 0 auto;
  color: #fcfcfc;
`;

export const RingtoneIcon = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
`;
