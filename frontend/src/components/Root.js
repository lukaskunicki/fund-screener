import React from "react";
import GlobalFonts from "../assets/fonts/fonts";
import Banner from "./exclusive/banner/Banner";
import Disclaimer from "./exclusive/disclaimer/Disclaimer";
import FundsScreener from "./exclusive/funds-screener/FundsScreener";
import { FundsScreenerProvider } from "../context/FundsScreenerContext";
import ErrorBoundary from "./error-boundary/ErrorBoundary";

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
