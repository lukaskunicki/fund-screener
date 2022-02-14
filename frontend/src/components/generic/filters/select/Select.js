import React from "react";
import PropTypes from "prop-types";
import { StyledSelect, StyledSelectWrapper } from "./StyledSelect";

const Select = ({ label, name, defaultValue, options, changeHandler }) => {
  return (
    <StyledSelectWrapper>
      <label>{label}</label>
      <StyledSelect
        name={name}
        onChange={(e) => changeHandler(name, e.target.value)}
      >
        <option value={defaultValue}>{defaultValue}</option>
        {/* TODO: use uuid here */}
        {options.map((option, key) => (
          <option key={key} value={option}>
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
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  changeHandler: PropTypes.func,
};

export default Select;
