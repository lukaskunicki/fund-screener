const getUniqueValuesFromKey = (dataset, key) => {
  return [...new Set(dataset.map((item) => item[key]))];
};

export default getUniqueValuesFromKey;
