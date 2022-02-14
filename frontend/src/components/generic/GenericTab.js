import React from "react";

const GenericTab = ({ title, children, isActive, clickHandler }) => {
  return (
    <div>
      <button onClick={() => clickHandler(!isActive)}>{title}</button>
      {!!isActive && <div>{children}</div>}
    </div>
  );
};

export default GenericTab;
