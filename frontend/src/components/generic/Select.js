import React from "react";
import PropTypes from "prop-types";

const Select = ({ label, name, defaultValue, options }) => {
  return (
    <div>
      <label>{label}</label>
      <select name={name}>
        <option disabled={true}>{defaultValue}</option>
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
};

export default Select;
