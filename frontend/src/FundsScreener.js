import FundsFilters from "./components/exclusive/FundsFilters";
import useFundsScreenerContext from "./hooks/useFundsScreenerContext";
import GenericTable from "./components/generic/GenericTable";
import GlobalFonts from "./assets/fonts/fonts";

const FundsScreener = () => {
  const [state] = useFundsScreenerContext();
  const tableHeaders = ["Name", "ISIN", "Region", "Type", "Launch Date"];

  return (
    <div>
      <GlobalFonts />
      <FundsFilters />
      <div>
        <GenericTable
          tableRows={state.filteredFundsData}
          tableHeaders={tableHeaders}
        />
      </div>
    </div>
  );
};

export default FundsScreener;
