import React from "react";
import StyledSearch from "./StyledSearch";
import useSearch from "../../../../hooks/useSearch";

const Search = ({ name, placeholder, searchHandler }) => {
  const [searchValue, changeHandler] = useSearch("", searchHandler);
  return (
    <div>
      <StyledSearch
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={changeHandler}
        value={searchValue}
      />
    </div>
  );
};

export default Search;
