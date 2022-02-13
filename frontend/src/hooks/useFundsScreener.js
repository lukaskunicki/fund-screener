import { useReducer, useCallback, useEffect } from "react";
import { fundsScreenerReducer } from "../reducers/fundsScreenerReducer";
import { fetchFundsData } from "../async/fetchFundsData";
import { filterKeys } from "../config/filters/filterKeys";
import fundsScreenerReducerActions from "../config/reducers/fundsScreenerReducerActions";
import groupBy from "../utils/universal/groupBy";
import objectToKeyValuePairs from "../utils/universal/objectToKeyValuePairs";
import getUniquePairValues from "../utils/universal/getUniquePairValues";
import fundsFilteringHelper from "../utils/filtering/fundsFilteringHelper";

const initialState = {
  initialFundsData: [],
  filteredFundsData: [],
  filtersData: [],
  appliedFilters: {},
  searchState: "",
};

const useFundsScreener = () => {
  const [state, dispatch] = useReducer(fundsScreenerReducer, initialState);

  const initializeFundsData = useCallback(async () => {
    const apiResponse = await fetchFundsData();
    const groupedFunds = groupBy(apiResponse, "fundName");
    const organisedFunds = objectToKeyValuePairs(groupedFunds);
    const filterUniqueValues = getUniquePairValues(apiResponse, filterKeys);

    dispatch({
      type: fundsScreenerReducerActions.INITIALIZE,
      payload: {
        initialFundsData: organisedFunds,
        filtersData: filterUniqueValues,
      },
    });
  }, []);

  const filterFunds = useCallback(
    (key, value) => {
      const { initialFundsData, appliedFilters, searchState } = state;
      const newFiltersState = { ...appliedFilters };
      newFiltersState[key] = value;
      const filtersResult = fundsFilteringHelper(initialFundsData, [
        newFiltersState,
        searchState,
      ]);

      dispatch({
        type: fundsScreenerReducerActions.FILTER,
        payload: {
          filteredFundsData: filtersResult,
          appliedFilters: newFiltersState,
        },
      });
    },
    [state]
  );

  const searchFunds = useCallback(
    (value) => {
      const { initialFundsData, appliedFilters } = state;

      const filtersResult = fundsFilteringHelper(initialFundsData, [
        appliedFilters,
        value,
      ]);
      dispatch({
        type: fundsScreenerReducerActions.SEARCH,
        payload: {
          filteredFundsData: filtersResult,
          searchState: value,
        },
      });
    },
    [state]
  );

  useEffect(() => {
    initializeFundsData();
  }, [initializeFundsData]);

  return [state, filterFunds, searchFunds];
};

export default useFundsScreener;
