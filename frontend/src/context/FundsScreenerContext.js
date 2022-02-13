import React, { createContext } from "react";
import useFundsScreener from "../hooks/useFundsScreener";

const FundsScreenerContext = createContext();

const FundsScreenerProvider = ({ children }) => {
  const [state, filterFunds, searchFunds] = useFundsScreener();
  const contextValue = [state, filterFunds, searchFunds];
  return (
    <FundsScreenerContext.Provider value={contextValue}>
      {children}
    </FundsScreenerContext.Provider>
  );
};

export { FundsScreenerContext, FundsScreenerProvider };
