import { useReducer, useCallback } from "react";
import { fundsScreenerReducer } from "../reducers/fundsScreenerReducer";
import { useAsync } from "./useAsync";

const initialState = {
  rawFundsData: [],
};

const useFundsScreener = () => {
  const [state, dispatch] = useReducer(fundsScreenerReducer, initialState);
  const initializeFundsData = useCallback(async () => {
    dispatch({
      type: fundsScreenerReducer.INITIALIZE,
      payload: {
        initialFundsData: [],
      },
    });
  }, []);
};

export { useFundsScreener };
