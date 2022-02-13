import filterFundsArray from "./filterFundsArray";

const fundsFilteringHelper = (initialFundsData, [filters, search]) => {
  return initialFundsData.map((fundGroup) => {
    return {
      key: fundGroup.key,
      value: [...filterFundsArray(fundGroup.value, { filters, search })],
    };
  });
};

export default fundsFilteringHelper;
