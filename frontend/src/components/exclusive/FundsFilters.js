import React from "react";
import useFundsScreenerContext from "../../hooks/useFundsScreenerContext";
import Select from "../generic/Select";

const FundsFilters = () => {
  const [state] = useFundsScreenerContext();

  return (
    <div>
      {state.filtersData.map((filter) => (
        <Select
          key={filter}
          defaultValue="All"
          label={filter.key}
          name={filter.key}
          options={filter.data}
        />
      ))}
    </div>
  );
};

export default FundsFilters;
