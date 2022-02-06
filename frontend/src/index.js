import React from "react";
import ReactDOM from "react-dom";

import FundsScreener from "./FundsScreener";
import { FundsScreenerProvider } from "./context/FundsScreenerContext";

ReactDOM.render(
  <React.StrictMode>
    <FundsScreenerProvider>
      <FundsScreener />
    </FundsScreenerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
