import React from "react";
import PropTypes from "prop-types";
import { StyledSelect, StyledSelectWrapper } from "./StyledSelect";

const Select = ({ label, name, value, options, changeHandler }) => {
  return (
    <StyledSelectWrapper>
      <label htmlFor={name}>{label}</label>
      <StyledSelect
        name={name}
        onChange={(e) => changeHandler(name, e.target.value)}
        value={value}
        id={name}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default React.memo(Select);
