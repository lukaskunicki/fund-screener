import React, { useState } from "react";
import GenericTab from "../generic/GenericTab";
import useFundsScreenerContext from "../../hooks/useFundsScreenerContext";
import GenericTable from "../generic/GenericTable";

const FundsTabs = () => {
  const tabsData = ["overview", "performance"];
  const [selectedTab, setSelectedTab] = useState(tabsData[0]);
  const [state] = useFundsScreenerContext();
  const tableHeaders = ["Name", "ISIN", "Region", "Type", "Launch Date"];
  return (
    <div>
      {tabsData.map((tab) => (
        <GenericTab
          key={tab}
          title={tab}
          isActive={selectedTab === tab}
          clickHandler={(e) => setSelectedTab(e)}
        >
          <GenericTable
            tableRows={state.filteredFundsData}
            tableHeaders={tableHeaders}
          />
        </GenericTab>
      ))}
    </div>
  );
};

export default FundsTabs;
