import { useState, useCallback } from "react";
import { debounce } from "lodash";

const useSearch = (initialText, searchStateHandler) => {
  const [searchValue, setSearchValue] = useState(initialText);

  const debounceHandler = useCallback(debounce(searchStateHandler, 500), []);

  const changeHandler = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    debounceHandler(value);
  };

  return [searchValue, changeHandler];
};

export default useSearch;
