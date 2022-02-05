import React, { createContext } from "react";

const FundScreenerContext = createContext();

const FundScreenerProvider = ({ children }) => {
  const contextValue = [];
  return (
    <FundScreenerContext.Provider value={contextValue}>
      {children}
    </FundScreenerContext.Provider>
  );
};

export { FundScreenerContext, FundScreenerProvider };
