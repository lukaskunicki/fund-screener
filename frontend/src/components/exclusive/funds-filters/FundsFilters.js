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
import Column from "../../../assets/global-styles/Column";

const FundsFilters = () => {
  const [state, filterFunds, searchFunds, clearFilters] =
    useFundsScreenerContext();
  const filtersActive = Object.values(state.appliedFilters).some(
    (value) => value !== initialFilterValue
  );

  return (
    <Container>
      <Row>
        <Column colWidth="25%">
          <Search
            name={"search"}
            placeholder="Start typing to search..."
            searchHandler={searchFunds}
          />
        </Column>
        {state.filtersData.map((filter) => (
          <Column colWidth="25%">
            <Select
              key={filter.key}
              value={state.appliedFilters[filter.key]}
              defaultValue={initialFilterValue}
              label={filter.key}
              name={filter.key}
              options={filter.data}
              changeHandler={filterFunds}
            />
          </Column>
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

export default FundsFilters;
