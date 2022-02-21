import React from "react";
import useFundsScreenerContext from "../../../hooks/useFundsScreenerContext";
import Select from "../../generic/filters/select/Select";
import Search from "../../generic/filters/search/Search";
import Container from "../../../assets/global-styles/Container";
import Row from "../../../assets/global-styles/Row";
import {
  StyledClearFiltersButton,
  StyledClearFiltersButtonWrapper,
} from "./StyledFundsFilters";
import { initialFilterValue } from "../../../config/filters/filterKeys";

const FundsFilters = () => {
  const [state, filterFunds, searchFunds, clearFilters] =
    useFundsScreenerContext();
  const filtersActive = Object.values(state.appliedFilters).some(
    (value) => value !== initialFilterValue
  );

  return (
    <Container>
      <Row>
        <Search
          name={"search"}
          placeholder="Start typing to search..."
          searchHandler={searchFunds}
        />
        {state.filtersData.map((filter) => (
          <Select
            key={filter.key}
            value={state.appliedFilters[filter.key]}
            label={filter.key}
            name={filter.key}
            options={filter.data}
            changeHandler={filterFunds}
          />
        ))}
      </Row>
      <Row>
        {!!filtersActive && (
          <StyledClearFiltersButtonWrapper>
            <StyledClearFiltersButton tabindex="0" onClick={clearFilters}>
              clear all filters
            </StyledClearFiltersButton>
          </StyledClearFiltersButtonWrapper>
        )}
      </Row>
    </Container>
  );
};

export default React.memo(FundsFilters);
