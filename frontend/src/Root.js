import React from "react";
import GlobalFonts from "./assets/fonts/fonts";
import Banner from "./components/exclusive/banner/Banner";
import Disclaimer from "./components/exclusive/disclaimer/Disclaimer";
import FundsScreener from "./FundsScreener";
import { FundsScreenerProvider } from "./context/FundsScreenerContext";

const Root = () => {
  return (
    <>
      <GlobalFonts />
      <Banner />
      <FundsScreenerProvider>
        <FundsScreener />
      </FundsScreenerProvider>
      <Disclaimer />
    </>
  );
};

export default Root;
