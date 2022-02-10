import { useReducer, useCallback, useEffect } from "react";
import { fundsScreenerReducer } from "../reducers/fundsScreenerReducer";
import { fetchFundsData } from "../async/fetchFundsData";
import { filterKeys } from "../config/filters/filterKeys";
import fundsScreenerReducerActions from "../config/reducers/fundsScreenerReducerActions";

const initialState = {
  initialFundsData: [],
  filteredFundsData: [],
  filtersData: [],
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

const filterFundsArray = (initialArray, { filterKey, filterValue }) => {
  if (filterValue === "All") return [...initialArray];
  return initialArray.filter((item) => item[filterKey] === filterValue);
};

const fundsFilteringHelper = (initialData, { filterKey, filterValue }) => {
  return initialData.map((fundGroup) => {
    return {
      key: fundGroup.key,
      value: [...filterFundsArray(fundGroup.value, { filterKey, filterValue })],
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
    (filterKey, filterValue) => {
      const filtersSet = { filterKey, filterValue };
      const filtersResult = fundsFilteringHelper(
        state.initialFundsData,
        filtersSet
      );

      dispatch({
        type: fundsScreenerReducerActions.FILTER,
        payload: {
          filteredFundsData: filtersResult,
        },
      });
    },
    [state.initialFundsData]
  );

  useEffect(() => {
    initializeFundsData();
  }, [initializeFundsData]);

  return [state, filterFunds];
};

export default useFundsScreener;
