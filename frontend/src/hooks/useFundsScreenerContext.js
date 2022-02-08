import { useContext } from "react";
import { FundsScreenerContext } from "../context/FundsScreenerContext";

const useFundsScreenerContext = () => {
  const context = useContext(FundsScreenerContext);
  if (context === undefined) {
    throw new Error(
      "FundsScreenerContext needs to be used within the Funds Screener context"
    );
  }
  return context;
};

export default useFundsScreenerContext;
