import React from "react";
import useFundsScreenerContext from "../../hooks/useFundsScreenerContext";
import Select from "../generic/Select";

const FundsFilters = () => {
  const [state, filterFunds] = useFundsScreenerContext();

  return (
    <div>
      {state.filtersData.map((filter) => (
        <Select
          key={filter.key}
          defaultValue="All"
          label={filter.key}
          name={filter.key}
          options={filter.data}
          changeHandler={filterFunds}
        />
      ))}
    </div>
  );
};

export default FundsFilters;
