const groupBy = (initialArray, key) => {
  return initialArray.reduce((total, item) => {
    total[item[key]] = total[item[key]] || [];
    total[item[key]].push(item);
    return total;
  }, {});
};

export default groupBy;
