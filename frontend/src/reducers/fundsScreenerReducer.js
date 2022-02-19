const fundsScreenerReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...state,
        initialFundsData: [...action.payload.initialFundsData],
        filteredFundsData: [...action.payload.initialFundsData],
        filtersData: [...action.payload.filtersData],
        isLoading: false,
      };
    case "FILTER":
      return {
        ...state,
        filteredFundsData: [...action.payload.filteredFundsData],
        appliedFilters: { ...action.payload.appliedFilters },
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filteredFundsData: [...state.initialFundsData],
        appliedFilters: { ...action.payload.appliedFilters },
      };
    case "SEARCH":
      return {
        ...state,
        filteredFundsData: [...action.payload.filteredFundsData],
        searchState: action.payload.searchState,
      };
    default:
      return { ...state };
  }
};

export { fundsScreenerReducer };
