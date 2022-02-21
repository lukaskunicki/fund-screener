import React, { useState } from "react";
import Tab from "../../generic/tabs/Tab";
import useFundsScreenerContext from "../../../hooks/useFundsScreenerContext";
import Table from "../../generic/table/Table";
import fundsTableConfig from "../../../config/table/fundsTableConfig";
import Container from "../../../assets/global-styles/Container";
import Row from "../../../assets/global-styles/Row";

const FundsTabs = () => {
  const tabsData = Object.keys(fundsTableConfig);
  const [selectedTab, setSelectedTab] = useState(tabsData[0]);
  const [state] = useFundsScreenerContext();

  return (
    <Container>
      <Row block>
        {tabsData.map((tab) => (
          <Tab
            key={tab}
            title={tab}
            isActive={selectedTab === tab}
            clickHandler={(e) => setSelectedTab(e)}
          />
        ))}
      </Row>
      <Row>
        <Table
          tableRows={state.filteredFundsData}
          columnsConfig={fundsTableConfig[selectedTab]}
          alternativeMessage="No funds were fund in the app"
        />
      </Row>
    </Container>
  );
};

export default React.memo(FundsTabs);
