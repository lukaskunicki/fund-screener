const fundsScreenerReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...state,
        initialFundsData: action.payload.initialFundsData,
        filtersData: action.payload.filtersData,
      };
    case "FILTER":
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export { fundsScreenerReducer };
