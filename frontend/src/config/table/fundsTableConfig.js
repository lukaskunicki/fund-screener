import {
  getFormattedDate,
  getPeriodValue,
  safeEmbed,
} from "../../utils/table/tableHelpers";

const fundsTableConfig = {
  overview: [
    {
      label: "Name",
      get: (fund) => safeEmbed(fund["name"]),
    },
    {
      label: "ISIN",
      get: (fund) => safeEmbed(fund["isin"]),
    },
    {
      label: "Region",
      get: (fund) => safeEmbed(fund["region"]),
    },
    {
      label: "Type",
      get: (fund) => safeEmbed(fund["type"]),
    },
    {
      label: "Launch Date",
      get: (fund) => getFormattedDate(fund["launchDate"]),
    },
  ],
  performance: [
    {
      label: "Name",
      get: (fund) => safeEmbed(fund["name"]),
    },
    {
      label: "1M",
      get: (fund) => getPeriodValue(fund, "1M"),
    },
    {
      label: "3M",
      get: (fund) => getPeriodValue(fund, "3M"),
    },
    {
      label: "6M",
      get: (fund) => getPeriodValue(fund, "6M"),
    },
    {
      label: "1Y",
      get: (fund) => getPeriodValue(fund, "1Y"),
    },
    {
      label: "3Y",
      get: (fund) => getPeriodValue(fund, "3Y"),
    },
    {
      label: "SI",
      get: (fund) => getPeriodValue(fund, "Inf"),
    },
    {
      label: "As of date",
      get: (fund) => getFormattedDate(fund.performance?.asOfDate),
    },
  ],
};

export default fundsTableConfig;
