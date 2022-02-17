import _find from "lodash/find";

export const safeEmbed = (statement) => statement || "-";

export const getPeriodValue = (fund, period) => {
  return _find(fund?.performance?.data, { period })?.value || "-";
};

export const getFormattedDate = (rawDate) => {
  const dateObj = new Date(rawDate);
  if (!dateObj) return;

  return new Intl.DateTimeFormat("en-GB", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  }).format(dateObj);
};
