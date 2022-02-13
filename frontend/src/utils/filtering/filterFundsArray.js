import containsPhrase from "./containsPhrase";
import objectToKeyValuePairs from "../universal/objectToKeyValuePairs";

const filterFundsArray = (initialArray, { filters, search }) => {
  const filtersArray = objectToKeyValuePairs(filters);
  return initialArray.filter((item) => {
    const { fundName, name } = item;
    const filterResult = filtersArray.every(
      (filter) => filter.value === "All" || item[filter.key] === filter.value
    );
    const searchResult = [fundName, name].some((prop) =>
      containsPhrase(prop, search)
    );
    return filterResult && searchResult;
  });
};

export default filterFundsArray;
