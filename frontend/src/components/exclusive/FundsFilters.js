import React from "react";
import useFundsScreenerContext from "../../hooks/useFundsScreenerContext";
import Select from "../generic/Select";
import Search from "../generic/Search";

const FundsFilters = () => {
  const [state, filterFunds, searchFunds] = useFundsScreenerContext();
  return (
    <div>
      <div>
        {state.filtersData.length && (
          <Search name={"search"} searchHandler={searchFunds} />
        )}
      </div>
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
