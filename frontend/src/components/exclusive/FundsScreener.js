import React from "react";
import FundsFilters from "./funds-filters/FundsFilters";
import FundsTabs from "./funds-tabs/FundsTabs";
import LoadingMask from "../../assets/global-styles/LoadingMask";
import Loader from "../../assets/icons/Loader.svg";
import ErrorMessage from "../../assets/global-styles/Errors";
import useFundsScreenerContext from "../../hooks/useFundsScreenerContext";

const FundsScreener = () => {
  const [state] = useFundsScreenerContext();
  const { isLoading, isError } = state.requestStatus;
  if (isLoading || isError) {
    return (
      <LoadingMask>
        {!!isLoading && <img src={Loader} alt="Loader" />}
        {!!isError && (
          <ErrorMessage>
            Sorry, we are not able to load the funds data
          </ErrorMessage>
        )}
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
