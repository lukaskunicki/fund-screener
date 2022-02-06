import { useReducer, useCallback, useEffect } from "react";
import { fundsScreenerReducer } from "../reducers/fundsScreenerReducer";
import { fetchFundsData } from "../async/fetchFundsData";

const initialState = {
  rawFundsData: [],
};

const groupBy = (initialArray, key) => {
  return initialArray.reduce((total, item) => {
    total[item[key]] = total[item[key]] || [];
    total[item[key]].push(item);
    return total;
  }, {});
};

const useFundsScreener = () => {
  const [state, dispatch] = useReducer(fundsScreenerReducer, initialState);

  const initializeFundsData = useCallback(async () => {
    const apiResponse = await fetchFundsData();
    const groupedFunds = groupBy(apiResponse, "fundName");

    dispatch({
      type: fundsScreenerReducer.INITIALIZE,
      payload: {
        initialFundsData: groupedFunds,
      },
    });
  }, []);

  useEffect(() => {
    initializeFundsData();
  }, [initializeFundsData]);

  return [state];
};

export { useFundsScreener };
