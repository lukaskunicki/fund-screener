import { useReducer, useCallback, useEffect } from "react";
import { fundsScreenerReducer } from "../reducers/fundsScreenerReducer";
import { fetchFundsData } from "../async/fetchFundsData";
import { filterKeys } from "../config/filters/filterKeys";
import fundsScreenerReducerActions from "../config/reducers/fundsScreenerReducerActions";

const initialState = {
  initialFundsData: [],
  filteredFundsData: [],
  filtersData: [],
  appliedFilters: {},
};

// TODO: detach from this hook
const groupBy = (initialArray, key) => {
  return initialArray.reduce((total, item) => {
    total[item[key]] = total[item[key]] || [];
    total[item[key]].push(item);
    return total;
  }, {});
};

const getUniqueValuesFromKey = (dataset, key) => {
  return [...new Set(dataset.map((item) => item[key]))];
};

const getUniquePairValues = (dataset, filterKeys) => {
  return filterKeys.map((key) => {
    return {
      key: key,
      data: getUniqueValuesFromKey(dataset, key),
    };
  });
};

const objectToKeyValuePairs = (data) => {
  return Object.entries(data).map(([key, value]) => ({ key, value }));
};

const filterFundsArray = (initialArray, filtersState) => {
  const filtersArray = Object.entries(filtersState).map(([key, value]) => ({
    key,
    value,
  }));
  return initialArray.filter((item) => {
    return filtersArray.every(
      (filter) => filter.value === "All" || item[filter.key] === filter.value
    );
  });
};

const fundsFilteringHelper = (initialData, filtersState) => {
  return initialData.map((fundGroup) => {
    return {
      key: fundGroup.key,
      value: [...filterFundsArray(fundGroup.value, filtersState)],
    };
  });
};
// end of pure functions

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
      const newFiltersState = { ...state.appliedFilters };
      newFiltersState[key] = value;
      const filtersResult = fundsFilteringHelper(
        state.initialFundsData,
        newFiltersState
      );

      dispatch({
        type: fundsScreenerReducerActions.FILTER,
        payload: {
          filteredFundsData: filtersResult,
          appliedFilters: newFiltersState,
        },
      });
    },
    [state.initialFundsData, state.appliedFilters]
  );

  useEffect(() => {
    initializeFundsData();
  }, [initializeFundsData]);

  return [state, filterFunds];
};

export default useFundsScreener;
