const fundsScreenerReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_FUNDS":
      return {
        ...state,
        rawFundsData: [...action.payload.rawFundsData],
      };
    case "FILTER_FUNDS":
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export { fundsScreenerReducer };
