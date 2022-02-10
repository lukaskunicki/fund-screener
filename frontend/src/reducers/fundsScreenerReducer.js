const fundsScreenerReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...state,
        initialFundsData: action.payload.initialFundsData,
        filteredFundsData: action.payload.initialFundsData,
        filtersData: action.payload.filtersData,
      };
    case "FILTER":
      return {
        ...state,
        filteredFundsData: [...action.payload.filteredFundsData],
      };
    default:
      return { ...state };
  }
};

export { fundsScreenerReducer };
