import React, { createContext } from "react";
import useFundsScreener from "../hooks/useFundsScreener";

const FundsScreenerContext = createContext();

const FundsScreenerProvider = ({ children }) => {
  const contextValue = useFundsScreener();
  return (
    <FundsScreenerContext.Provider value={contextValue}>
      {children}
    </FundsScreenerContext.Provider>
  );
};

export { FundsScreenerContext, FundsScreenerProvider };
