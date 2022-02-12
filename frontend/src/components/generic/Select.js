import React from "react";
import PropTypes from "prop-types";

const Select = ({ label, name, defaultValue, options, changeHandler }) => {
  return (
    <div>
      <label>{label}</label>
      <select name={name} onChange={(e) => changeHandler(name, e.target.value)}>
        <option value={defaultValue}>{defaultValue}</option>
        {/* TODO: use uuid here */}
        {options.map((option, key) => (
          <option key={key} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
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
