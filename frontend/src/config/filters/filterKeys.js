const filterKeys = ["currency", "region", "type"];
const initialFilterValue = "All";

const getInitialFilterValue = () => {
  let output = {};
  filterKeys.forEach((key) => (output[key] = initialFilterValue));
  return output;
};

export { filterKeys, initialFilterValue, getInitialFilterValue };
