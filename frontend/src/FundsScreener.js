import FundsFilters from "./components/exclusive/funds-filters/FundsFilters";
import GlobalFonts from "./assets/fonts/fonts";
import FundsTabs from "./components/exclusive/FundsTabs";
import Banner from "./components/exclusive/banner/Banner";

const FundsScreener = () => {
  return (
    <>
      <GlobalFonts />
      <Banner />
      <FundsFilters />
      <FundsTabs />
    </>
  );
};

export default FundsScreener;
