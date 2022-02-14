import FundsFilters from "./components/exclusive/FundsFilters";
import GlobalFonts from "./assets/fonts/fonts";
import FundsTabs from "./components/exclusive/FundsTabs";

const FundsScreener = () => {
  return (
    <div>
      <GlobalFonts />
      <FundsFilters />
      <div>
        <FundsTabs />
      </div>
    </div>
  );
};

export default FundsScreener;
