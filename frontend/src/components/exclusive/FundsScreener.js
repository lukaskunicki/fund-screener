import React from "react";
import FundsFilters from "./funds-filters/FundsFilters";
import FundsTabs from "./funds-tabs/FundsTabs";
import useFundsScreenerContext from "../../hooks/useFundsScreenerContext";
import LoadingMask from "../../assets/global-styles/LoadingMask";
import Loader from "../../assets/icons/Loader.svg";

const FundsScreener = () => {
  const [state] = useFundsScreenerContext();
  if (state.isLoading) {
    return (
      <LoadingMask>
        <img src={Loader} alt="Loader" />
      </LoadingMask>
    );
  }
  return (
    <>
      <FundsFilters />
      <FundsTabs />
    </>
  );
};

export default React.memo(FundsScreener);
