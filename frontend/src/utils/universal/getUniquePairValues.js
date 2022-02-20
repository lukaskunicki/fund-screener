import getUniqueValuesFromKey from "./getUniqueValuesFromKey";
import { initialFilterValue } from "../../config/filters/filterKeys";

const getUniquePairValues = (dataset, filterKeys) => {
  return filterKeys.map((key) => {
    return {
      key: key,
      data: [initialFilterValue, ...getUniqueValuesFromKey(dataset, key)],
    };
  });
};

export default getUniquePairValues;
