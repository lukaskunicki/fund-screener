import React from "react";
import PropTypes from "prop-types";
import { StyledSelect, StyledSelectWrapper } from "./StyledSelect";

const Select = ({ label, name, value, options, changeHandler }) => {
  return (
    <StyledSelectWrapper>
      <label>{label}</label>
      <StyledSelect
        name={name}
        onChange={(e) => changeHandler(name, e.target.value)}
        value={value}
      >
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
  options: PropTypes.array.isRequired,
  changeHandler: PropTypes.func,
};

export default Select;
