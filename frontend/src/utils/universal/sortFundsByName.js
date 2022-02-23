const sortFundsByName = (funds) => {
  return funds.map((group) => {
    return {
      key: group.key,
      value: group.value.sort((a, b) => a.name.localeCompare(b.name)),
    };
  });
};

export default sortFundsByName;
