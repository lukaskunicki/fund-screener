import getUniqueValuesFromKey from "./getUniqueValuesFromKey";

const getUniquePairValues = (dataset, filterKeys) => {
  return filterKeys.map((key) => {
    return {
      key: key,
      data: getUniqueValuesFromKey(dataset, key),
    };
  });
};

export default getUniquePairValues;
