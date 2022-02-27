import { useState, useCallback } from "react";
import debounce from "lodash/debounce";

const useSearch = (initialText, searchStateHandler) => {
  const [searchValue, setSearchValue] = useState(initialText);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandler = useCallback(debounce(searchStateHandler, 250), []);
  // We can ignore the issue above, as we're simply using the external debounce functions

  const changeHandler = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    debounceHandler(value);
  };

  return [searchValue, changeHandler];
};

export default useSearch;
