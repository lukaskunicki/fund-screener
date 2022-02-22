import React from "react";
import GlobalFonts from "./assets/fonts/fonts";
import Banner from "./components/exclusive/banner/Banner";
import Disclaimer from "./components/exclusive/disclaimer/Disclaimer";
import FundsScreener from "./components/exclusive/FundsScreener";
import { FundsScreenerProvider } from "./context/FundsScreenerContext";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

const Root = () => {
  return (
    <>
      <GlobalFonts />
      <ErrorBoundary>
        <Banner />
        <FundsScreenerProvider>
          <FundsScreener />
        </FundsScreenerProvider>
        <Disclaimer />
      </ErrorBoundary>
    </>
  );
};

export default Root;
