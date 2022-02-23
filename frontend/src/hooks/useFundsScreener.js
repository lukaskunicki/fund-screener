import { useReducer, useCallback, useEffect } from "react";
import fundsScreenerReducer from "../reducers/fundsScreenerReducer";
import fetchFundsData from "../utils/async/fetchFundsData";
import {
  filterKeys,
  getInitialFilterValue,
} from "../config/filters/filterKeys";
import fundsScreenerReducerActions from "../config/reducers/fundsScreenerReducerActions";
import groupBy from "../utils/universal/groupBy";
import objectToKeyValuePairs from "../utils/universal/objectToKeyValuePairs";
import getUniquePairValues from "../utils/universal/getUniquePairValues";
import fundsFilteringHelper from "../utils/filtering/fundsFilteringHelper";
import sortFundsByName from "../utils/universal/sortFundsByName";

const initialState = {
  initialFundsData: [],
  filteredFundsData: [],
  filtersData: [],
  appliedFilters: getInitialFilterValue(),
  searchState: "",
  requestStatus: {
    isLoading: true,
    isError: false,
  },
};

const useFundsScreener = () => {
  const [state, dispatch] = useReducer(fundsScreenerReducer, initialState);

  const initializeFundsData = useCallback(async () => {
    const apiResponse = await fetchFundsData();
    if (!apiResponse) {
      return dispatch({ type: fundsScreenerReducerActions.SET_ERROR });
    }
    const filteredResponse = apiResponse.filter(
      (fund) => fund.fundName?.length && fund.name?.length
    );
    const groupedFunds = groupBy(filteredResponse, "fundName");
    const organisedFunds = sortFundsByName(objectToKeyValuePairs(groupedFunds));
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
      let newFiltersState = { ...appliedFilters };
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

  const clearFilters = useCallback(
    () =>
      dispatch({
        type: fundsScreenerReducerActions.CLEAR_FILTERS,
        payload: {
          appliedFilters: getInitialFilterValue(),
        },
      }),
    []
  );

  useEffect(() => {
    initializeFundsData();
  }, [initializeFundsData]);

  return [state, filterFunds, searchFunds, clearFilters];
};

export default useFundsScreener;
