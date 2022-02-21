import React from "react";
import PropTypes from "prop-types";
import { StyledSearch, SearchWrapper } from "./StyledSearch";
import useSearch from "../../../../hooks/useSearch";

const Search = ({ name, placeholder, searchHandler }) => {
  const [searchValue, changeHandler] = useSearch("", searchHandler);
  return (
    <SearchWrapper>
      <StyledSearch
        type="search"
        name={name}
        placeholder={placeholder}
        onChange={changeHandler}
        value={searchValue}
      />
    </SearchWrapper>
  );
};

Search.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  searchHandler: PropTypes.func.isRequired,
};

export default React.memo(Search);
