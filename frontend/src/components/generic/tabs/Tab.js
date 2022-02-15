import React from "react";
import StyledTab from "./StyledTab";

const Tab = ({ title, children, isActive, clickHandler }) => {
  return (
    <StyledTab active={isActive} onClick={() => clickHandler(title)}>
      {title}
    </StyledTab>
  );
};

export default Tab;
