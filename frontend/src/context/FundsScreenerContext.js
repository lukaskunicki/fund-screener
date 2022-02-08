import React, { createContext } from "react";
import useFundsScreener from "../hooks/useFundsScreener";

const FundsScreenerContext = createContext();

const FundsScreenerProvider = ({ children }) => {
  const [state, dispatch] = useFundsScreener();
  const contextValue = [state, dispatch];
  return (
    <FundsScreenerContext.Provider value={contextValue}>
      {children}
    </FundsScreenerContext.Provider>
  );
};

export { FundsScreenerContext, FundsScreenerProvider };
