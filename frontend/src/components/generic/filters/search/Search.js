import React from "react";
import { StyledSearch, SearchWrapper } from "./StyledSearch";
import useSearch from "../../../../hooks/useSearch";

const Search = ({ name, placeholder, searchHandler }) => {
  const [searchValue, changeHandler] = useSearch("", searchHandler);
  return (
    <SearchWrapper>
      <StyledSearch
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={changeHandler}
        value={searchValue}
      />
    </SearchWrapper>
  );
};

export default Search;
