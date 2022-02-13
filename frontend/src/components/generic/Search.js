import React from "react";
import useSearch from "../../hooks/useSearch";

const Search = ({ name, searchHandler }) => {
  const [searchValue, changeHandler] = useSearch("", searchHandler);
  return (
    <div>
      <input
        type="text"
        name={name}
        onChange={changeHandler}
        value={searchValue}
      />
    </div>
  );
};

export default Search;
