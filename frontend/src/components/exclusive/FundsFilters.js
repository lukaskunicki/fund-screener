import React from "react";
import useFundsScreenerContext from "../../hooks/useFundsScreenerContext";
import Select from "../generic/filters/select/Select";
import Search from "../generic/filters/search/Search";
import Container from "../../assets/global-styles/Container";
import Row from "../../assets/global-styles/Row";

const FundsFilters = () => {
  const [state, filterFunds, searchFunds] = useFundsScreenerContext();
  return (
    <Container>
      <Row>
        <div>
          {!!state.filtersData.length && (
            <Search
              name={"search"}
              placeholder="Start typing to search..."
              searchHandler={searchFunds}
            />
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
      </Row>
    </Container>
  );
};

export default FundsFilters;
