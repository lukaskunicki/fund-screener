import React from "react";
import PropTypes from "prop-types";
import StyledTab from "./StyledTab";

const Tab = ({ title, isActive, clickHandler }) => {
  return (
    <StyledTab
      role="tab"
      aria-selected={!!isActive}
      active={!!isActive}
      aria-controls={`${title}-tab`}
      onClick={() => clickHandler(title)}
    >
      {title}
    </StyledTab>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default React.memo(Tab);
