const filterKeys = ["currency", "region", "type"];
const initialValue = "All";

const getInitialFilterValue = () => {
  let output = {};
  filterKeys.forEach((key) => (output[key] = initialValue));
  return output;
};

export { filterKeys, getInitialFilterValue };
