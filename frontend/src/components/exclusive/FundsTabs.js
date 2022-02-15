import React, { useState } from "react";
import Tab from "../generic/tabs/Tab";
import useFundsScreenerContext from "../../hooks/useFundsScreenerContext";
import GenericTable from "../generic/GenericTable";

const FundsTabs = () => {
  const tabsData = ["overview", "performance"];
  const [selectedTab, setSelectedTab] = useState(tabsData[0]);
  const [state] = useFundsScreenerContext();
  const tableHeaders = ["Name", "ISIN", "Region", "Type", "Launch Date"];
  // const tableHeaders = [
  //   { label: "Name", key: "fundName" },
  //   { label: "ISIN", key: "isin" },
  //   { label: "Region", key: "region" },
  //   { label: "Type", key: "type" },
  //   { label: "Launch Date", key: "launchDate" },
  // ];
  return (
    <>
      <div>
        {tabsData.map((tab) => (
          <Tab
            key={tab}
            title={tab}
            isActive={selectedTab === tab}
            clickHandler={(e) => setSelectedTab(e)}
          />
        ))}
      </div>
      <div>
        <GenericTable
          tableRows={state.filteredFundsData}
          tableHeaders={tableHeaders}
        />
      </div>
    </>
  );
};

export default FundsTabs;
