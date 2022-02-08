import { useReducer, useCallback, useEffect } from "react";
import { fundsScreenerReducer } from "../reducers/fundsScreenerReducer";
import { fetchFundsData } from "../async/fetchFundsData";
import { filterKeys } from "../config/filters/filterKeys";
import fundsScreenerReducerActions from "../config/reducers/fundsScreenerReducerActions";

const initialState = {
  initialFundsData: [],
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
      type: fundsScreenerReducerActions.INITIALIZE,
      payload: {
        initialFundsData: groupedFunds,
        filtersData: filterUniqueValues,
      },
    });
  }, []);

  useEffect(() => {
    initializeFundsData();
  }, [initializeFundsData]);

  return [state, dispatch];
};

export default useFundsScreener;
