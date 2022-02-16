import React, { useState } from "react";
import Tab from "../generic/tabs/Tab";
import useFundsScreenerContext from "../../hooks/useFundsScreenerContext";
import GenericTable from "../generic/GenericTable";
import fundsTableConfig from "../../config/table/fundsTableConfig";
import Container from "../../assets/global-styles/Container";

const FundsTabs = () => {
  const tabsData = Object.keys(fundsTableConfig);
  const [selectedTab, setSelectedTab] = useState(tabsData[0]);
  const [state] = useFundsScreenerContext();

  return (
    <Container>
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
          columnsConfig={fundsTableConfig[selectedTab]}
        />
      </div>
    </Container>
  );
};

export default FundsTabs;
