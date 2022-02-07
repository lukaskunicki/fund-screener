import { useReducer, useCallback, useEffect } from "react";
import { fundsScreenerReducer } from "../reducers/fundsScreenerReducer";
import { fetchFundsData } from "../async/fetchFundsData";
import { filterKeys } from "../config/filters/filterKeys";

const initialState = {
  rawFundsData: [],
  filtersData: [],
};

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

const useFundsScreener = () => {
  const [state, dispatch] = useReducer(fundsScreenerReducer, initialState);

  const initializeFundsData = useCallback(async () => {
    const apiResponse = await fetchFundsData();
    const groupedFunds = groupBy(apiResponse, "fundName");
    const filterUniqueValues = getUniquePairValues(apiResponse, filterKeys);

    dispatch({
      type: fundsScreenerReducer.INITIALIZE,
      payload: {
        initialFundsData: groupedFunds,
        filtersData: filterUniqueValues,
      },
    });
  }, []);

  useEffect(() => {
    initializeFundsData();
  }, [initializeFundsData]);

  return [state];
};

export { useFundsScreener };
