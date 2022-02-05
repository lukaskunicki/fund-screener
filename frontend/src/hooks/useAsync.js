import { useEffect, useState, useCallback } from "react";

const useAsync = (asyncMethod) => {
  const [requestState, setRequestState] = useState({
    value: null,
    error: null,
  });

  const initialize = useCallback(() => {
    setRequestState({
      value: null,
      error: null,
    });
    return asyncMethod()
      .then((response) => {
        setRequestState({ ...requestState, value: response });
      })
      .catch((errorMessage) => {
        setRequestState({ ...requestState, error: errorMessage });
      });
  }, [asyncMethod, requestState]);

  useEffect(() => {
    initialize();
  }, [initialize]);
  const { value, error } = requestState;
  return { value, error };
};

export { useAsync };
