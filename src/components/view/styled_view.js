import styled from "styled-components";
import { Box } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ViewWrapper = styled(Box)`
  position: relative;
  padding: 56px;
`;

export const PodomoroStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: #ea5548;
  color: #fff;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  position: relative;
  font-family: "Lato";
  font-weight: 300;
  letter-spacing: 3.6px;
  line-height: 29px;
  margin: 0 auto;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 70px;
    height: 92px;
    transform-origin: center;
    transform: rotateZ(45deg) scale(0.8) translateX(-8px) translateY(8px);
    background: #316901 0% 0% no-repeat padding-box;
    border-radius: 50px;
    opacity: 1;
  }
`;

export const WarningMsg = styled.div`
  font-family: "Lato";
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1.4px;
  line-height: 20px;
  margin-top: 48px;
  text-align: center;
`;

export const LogoStyle = styled.p`
  font-family: "Lato";
  font-weight: 300;
  font-size: 10px;
  letter-spacing: 1.5px;
  line-height: 12px;
`;

export const TimerBtn = styled(FontAwesomeIcon)`
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
