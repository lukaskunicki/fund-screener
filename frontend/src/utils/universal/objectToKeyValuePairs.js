const objectToKeyValuePairs = (data) => {
  return Object.entries(data).map(([key, value]) => ({ key, value }));
};

export default objectToKeyValuePairs;
